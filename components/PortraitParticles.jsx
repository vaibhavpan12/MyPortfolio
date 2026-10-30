import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORLD_HEIGHT = 10;
const SAMPLE_SIZE = 300;

const vertexShader = [
  "uniform vec2 uMouse;",
  "uniform vec2 uCenter;",
  "uniform float uPortraitSize;",
  "uniform float uHover;",
  "uniform float uScroll;",
  "uniform float uTime;",

  "attribute float aRandom;",
  "varying vec3 vColor;",
  "varying float vAlpha;",
  "void main() {",
  "  vec2 portraitPoint = position.xy * uPortraitSize + uCenter;",
  "  float distanceToMouse = distance(portraitPoint, uMouse);",
  "  float influence = (1.0 - smoothstep(0.0, 1.2, distanceToMouse)) * uHover;",
  "  vec2 direction = normalize(portraitPoint - uMouse + vec2(0.0001));",
  "  portraitPoint += direction * influence * (0.12 + aRandom * 0.18);",
  "  float scatter = smoothstep(0.04, 0.9, uScroll) * aRandom;",
  "  float angle = aRandom * 45.0 + uTime * (0.35 + aRandom);",
  "  portraitPoint += vec2(cos(angle), sin(angle)) * scatter * 0.72;",
  "  portraitPoint.y += scatter * 0.28;",
  "  float luminance = dot(color, vec3(0.299, 0.587, 0.114));",
  "  float detail = smoothstep(0.04, 0.65, luminance);",
  "  vColor = vec3(0.12 + detail * 0.88, 0.1 + detail * 0.82, 0.09 + detail * 0.68);",
  "  vAlpha = 1.0 - smoothstep(0.12, 1.0, uScroll) * 0.6;",
  "  vec4 viewPosition = modelViewMatrix * vec4(portraitPoint, position.z + influence * 0.15, 1.0);",
  "  gl_Position = projectionMatrix * viewPosition;",
  "  gl_PointSize = 3.1 + influence * 3.5 + scatter * 0.8;",
  "}",
].join("\n");

const fragmentShader = [
  "varying vec3 vColor;",
  "varying float vAlpha;",
  "void main() {",
  "  float radius = length(gl_PointCoord - vec2(0.5));",
  "  float alpha = (1.0 - smoothstep(0.22, 0.5, radius)) * vAlpha;",
  "  if (alpha < 0.025) discard;",
  "  gl_FragColor = vec4(vColor, alpha);",
  "}",
].join("\n");

export default function PortraitParticles({ imageUrl, className = "" }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    let renderer;
    let geometry;
    let material;
    let observer;
    let scrollTrigger;
    let image;
    let resizeObserver;
    let removePointerListeners = () => {};
    let isVisible = true;
    let disposed = false;

    const showFallback = () => host.classList.add("is-fallback");

    const createScene = () => {
      if (disposed || renderer) return;

      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = SAMPLE_SIZE;
      sampleCanvas.height = SAMPLE_SIZE;
      const context = sampleCanvas.getContext("2d", { willReadFrequently: true });
      if (!context) {
        showFallback();
        return;
      }

      try {
        context.drawImage(image, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
      } catch {
        showFallback();
        return;
      }

      const pixels = context.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE).data;
      const positions = [];
      const colors = [];
      const randomValues = [];
      const step = 2;

      for (let y = 0; y < SAMPLE_SIZE; y += step) {
        for (let x = 0; x < SAMPLE_SIZE; x += step) {
          const pixel = (y * SAMPLE_SIZE + x) * 4;
          const red = pixels[pixel];
          const green = pixels[pixel + 1];
          const blue = pixels[pixel + 2];
          const isDarkTealBackground =
            red < 100 &&
            green > red * 1.3 &&
            blue > red * 1.25 &&
            Math.abs(blue - green) < 40;
          if (pixels[pixel + 3] < 28 || isDarkTealBackground) continue;

          positions.push(x / SAMPLE_SIZE - 0.5, 0.5 - y / SAMPLE_SIZE, 0);
          colors.push(red / 255, green / 255, blue / 255);
          randomValues.push(Math.random());
        }
      }

      geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
      geometry.setAttribute("aRandom", new THREE.Float32BufferAttribute(randomValues, 1));

      const uniforms = {
        uMouse: { value: new THREE.Vector2(99, 99) },
        uCenter: { value: new THREE.Vector2() },
        uPortraitSize: { value: 1 },
        uHover: { value: 0 },
        uScroll: { value: 0 },
        uTime: { value: 0 },
      };

      material = new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthWrite: false,
        vertexColors: true,
        vertexShader,
        fragmentShader,
      });

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 20);
      camera.position.z = 8;
      scene.add(new THREE.Points(geometry, material));

      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
      } catch {
        geometry.dispose();
        material.dispose();
        geometry = undefined;
        material = undefined;
        showFallback();
        return;
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.domElement.className = "portrait-particle-canvas";
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);

      const resize = () => {
        if (!renderer) return;
        const width = host.clientWidth || window.innerWidth;
        const height = host.clientHeight || window.innerHeight;
        const aspect = width / height;
        const viewWidth = WORLD_HEIGHT * aspect;

        camera.left = -viewWidth / 2;
        camera.right = viewWidth / 2;
        camera.top = WORLD_HEIGHT / 2;
        camera.bottom = -WORLD_HEIGHT / 2;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);

        const portraitSize = Math.min(6.5, viewWidth * 0.86);
        const centerX = 0;
        const centerY = aspect > 1.15 ? 0.4 : 0.05;
        uniforms.uPortraitSize.value = portraitSize;
        uniforms.uCenter.value.set(centerX, centerY);
      };

      resize();
      resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null;
      resizeObserver?.observe(host);

      const handlePointerMove = (event) => {
        const rect = renderer.domElement.getBoundingClientRect();
        const insideHero =
          event.clientX >= rect.left && event.clientX <= rect.right &&
          event.clientY >= rect.top && event.clientY <= rect.bottom;

        if (!insideHero) {
          uniforms.uHover.value = 0;
          return;
        }

        const viewWidth = WORLD_HEIGHT * (rect.width / rect.height);
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * viewWidth;
        const y = (0.5 - (event.clientY - rect.top) / rect.height) * WORLD_HEIGHT;
        uniforms.uMouse.value.set(x, y);
        uniforms.uHover.value = 1;
      };

      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      removePointerListeners = () => window.removeEventListener("pointermove", handlePointerMove);

      if (typeof IntersectionObserver !== "undefined") {
        observer = new IntersectionObserver(([entry]) => {
          isVisible = entry.isIntersecting;
        });
        observer.observe(host);
      }

      const clock = new THREE.Clock();
      renderer.setAnimationLoop(() => {
        if (!renderer || !isVisible) return;
        uniforms.uTime.value = clock.getElapsedTime();
        renderer.render(scene, camera);
      });

      scrollTrigger = ScrollTrigger.create({
        trigger: host.closest(".hero-section") || host,
        start: "top top",
        end: "bottom top",
        scrub: 0.45,
        onUpdate: (self) => {
          uniforms.uScroll.value = self.progress;
        },
      });

      host.classList.add("is-ready");
    };

    image = new Image();
    image.onload = createScene;
    image.onerror = showFallback;
    image.src = imageUrl;
    if (image.complete && image.naturalWidth > 0) createScene();

    return () => {
      disposed = true;
      image.onload = null;
      image.onerror = null;
      observer?.disconnect();
      scrollTrigger?.kill();
      resizeObserver?.disconnect();
      removePointerListeners();
      renderer?.setAnimationLoop(null);
      geometry?.dispose();
      material?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, [imageUrl]);

  return (
    <div className={["portrait-particle-host", className].filter(Boolean).join(" ")} ref={hostRef}>
      <img className="portrait-particle-fallback" src={imageUrl} alt="Portrait of Vaibhav Panchal" />
    </div>
  );
}
