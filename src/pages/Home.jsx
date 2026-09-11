import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "../assets/css/Home.css";

import images from "../images";

import {
  faArrowDown,
  faDatabase,
  faBolt,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { faReact, faNodeJs, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreativeNav from "../../components/Header";
import "../assets/css/Project.css";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    id: "01",
    name: "React",
    category: "Frontend",
    desc: "Building fast, component-driven interfaces.",
    icon: faReact,
  },
  {
    id: "02",
    name: "JavaScript",
    category: "Language",
    desc: "The core language behind everything I ship.",
    icon: faJs,
  },
  {
    id: "03",
    name: "Node.js",
    category: "Backend",
    desc: "APIs, servers and real-time logic.",
    icon: faNodeJs,
  },
  {
    id: "04",
    name: "MongoDB",
    category: "Database",
    desc: "Flexible schemas for fast-moving products.",
    icon: faDatabase,
  },
  {
    id: "05",
    name: "GSAP",
    category: "Animation",
    desc: "Scroll-driven motion and micro-interactions.",
    icon: faBolt,
  },
  {
    id: "06",
    name: "UI / UX",
    category: "Design",
    desc: "Interfaces that feel as good as they look.",
    icon: faPalette,
  },
];

export default function Home() {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const orbRef = useRef(null);
  const imageOneRef = useRef(null);
  const imageTwoRef = useRef(null);
  const imageThreeRef = useRef(null);
  const titleRef = useRef(null);
  const skillsProgressRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    // Lenis -> ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP -> Lenis
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    // Don't let GSAP add extra lag
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      /* ==========================================
       HERO INTRO
    ========================================== */

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from(".hero-small-text", {
          y: 30,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-line",
          {
            yPercent: 110,
            duration: 0.9,
            stagger: 0.08,
          },
          "-=0.4",
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        );

      /* ==========================================
       HERO ORB PARALLAX
    ========================================== */

      gsap.to(orbRef.current, {
        y: -100,
        x: 40,
        rotation: 20,
        scale: 1.08,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      /* ==========================================
       IMAGE PARALLAX
    ========================================== */

      gsap.to(imageOneRef.current, {
        y: -180,
        rotate: -5,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(imageTwoRef.current, {
        y: -90,
        rotate: 5,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(imageThreeRef.current, {
        y: -240,
        rotate: 8,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      /* ==========================================
       HERO SCALE
    ========================================== */

      gsap.to(".hero-inner", {
        scale: 0.88,
        opacity: 0.25,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      /* ==========================================
       ABOUT
    ========================================== */

      gsap.from(".about-word", {
        yPercent: 100,
        opacity: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
        },
      });

      /* ==========================================
       SKILLS (pinned horizontal card row — page
       holds here until the row finishes, then
       scroll continues)
    ========================================== */

      const skillTrack = document.querySelector(".skill-track");

      const skillsSection = document.querySelector(".skills-section");

      if (skillTrack && skillsSection) {
        const getSkillDistance = () => {
          return Math.max(0, skillTrack.scrollWidth - window.innerWidth);
        };

        gsap.to(skillTrack, {
          x: () => -getSkillDistance(),

          ease: "none",

          scrollTrigger: {
            trigger: skillsSection,

            start: "top top",

            end: () => `+=${getSkillDistance()}`,

            pin: true,

            scrub: 0.7,

            invalidateOnRefresh: true,

            anticipatePin: 1,

            onUpdate: (self) => {
              if (skillsProgressRef.current) {
                skillsProgressRef.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });
      }

      /* ==========================================
       HORIZONTAL PROJECTS
    ========================================== */

      const projectTrack = document.querySelector(".project-track");

      const projectSection = document.querySelector(".projects-section");

      if (projectTrack && projectSection) {
        const getDistance = () => {
          return Math.max(0, projectTrack.scrollWidth - window.innerWidth);
        };

        gsap.to(projectTrack, {
          x: () => -getDistance(),

          ease: "none",

          scrollTrigger: {
            trigger: projectSection,

            start: "top top",

            end: () => `+=${getDistance()}`,

            pin: true,

            scrub: 0.7,

            invalidateOnRefresh: true,

            anticipatePin: 1,
          },
        });
      }

      /* ==========================================
       PROJECT CARD FLOAT
    ========================================== */

      gsap.utils.toArray(".project-card").forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -30 : 30,

          ease: "none",

          scrollTrigger: {
            trigger: ".projects-section",

            start: "top bottom",

            end: "bottom top",

            scrub: 0.7,
          },
        });
      });

      /* ==========================================
       FOOTER
    ========================================== */

      gsap.from(".footer-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 80%",
        },
      });

      // Refresh after everything is ready
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, mainRef);

    return () => {
      ctx.revert();

      gsap.ticker.remove(updateLenis);

      lenis.destroy();
    };
  }, []);

  return (
    <main ref={mainRef} className="creative-home">
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="grain"></div>

      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      {/* =========================================
          NAVBAR
      ========================================== */}

        <CreativeNav />
      {/* <header className="creative-nav">
        <Link to="/" className="creative-logo">
          <span className="logo-circle"></span>
          <span>VP</span>
        </Link>

        <div className="nav-middle">
          <span>Frontend Developer</span>
          <span>India</span>
        </div>
        <Link to="/contact" className="menu-button">
          <span>Menu</span>
          <span className="menu-icon">↗</span>
        </Link>
      </header> */}

      {/* =========================================
          HERO
      ========================================== */}

      <section ref={heroRef} className="hero-section">
        <div className="hero-inner">
          <div className="hero-top">
            <span className="hero-small-text">DIGITAL EXPERIENCE</span>

            <span className="hero-number">01 / 05</span>
          </div>

          <div ref={titleRef} className="hero-title">
            <div className="hero-title-line">
              <div className="hero-line-wrap">
                <span className="hero-line">Creative</span>
              </div>
            </div>

            <div className="hero-title-line hero-title-indent">
              <div className="hero-line-wrap">
                <span className="hero-line">Web</span>
              </div>
            </div>

            <div className="hero-title-line">
              <div className="hero-line-wrap">
                <span className="hero-line hero-outline">Developer</span>
              </div>
            </div>
          </div>

          {/* ORB */}

          <div ref={orbRef} className="hero-orb">
            <div className="orb-inner"></div>
            <div className="orb-highlight"></div>
          </div>

          {/* FLOATING IMAGE 1 */}

          <div ref={imageOneRef} className="floating-image floating-image-one">
            <img src={images.flaashnet} alt="Project" />
          </div>

          {/* FLOATING IMAGE 2 */}

          <div ref={imageTwoRef} className="floating-image floating-image-two">
            <img src={images.gemini} alt="Project" />
          </div>

          {/* FLOATING IMAGE 3 */}

          <div
            ref={imageThreeRef}
            className="floating-image floating-image-three"
          >
            <img src={images.beyoundchat} alt="Project" />
          </div>

          <div className="hero-bottom">
            <p className="hero-description">
              I design and build digital experiences where technology, motion
              and visual storytelling come together.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="circle-link">
                <span>Explore</span>

                <FontAwesomeIcon icon={faArrowDown} />
              </Link>

              <span className="hero-location">Based in India</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          ABOUT
      ========================================== */}

      <section className="about-section">
        <div className="about-glow"></div>

        <span className="about-ghost">02</span>

        <div className="section-label">
          <span>(02)</span>
          <span>ABOUT</span>
        </div>

        <div className="about-content">
          <h2>
            <span className="about-word">I</span>{" "}
            <span className="about-word">build</span>{" "}
            <span className="about-word">digital</span>{" "}
            <span className="about-word">experiences</span>{" "}
            <span className="about-word">that</span>{" "}
            <span className="about-word">feel</span>{" "}
            <span className="about-word">alive.</span>
          </h2>

          <div className="about-bottom">
            <p>
              From interfaces and animations to full-stack applications, I enjoy
              turning ideas into polished products.
            </p>

            <Link to="/about" className="text-link">
              More about me
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          SKILLS
      ========================================== */}

      <section className="skills-section">
        <div className="skills-heading">
          <div className="section-label light">
            <span>(03)</span>
            <span>SKILLS</span>
          </div>

          <p>
            SCROLL
            <br />
            TO EXPLORE →
          </p>
        </div>

        <div className="skill-track">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-card"
              style={{
                transform: `rotate(${index % 2 === 0 ? -1.5 : 1.5}deg)`,
              }}
            >
              <span className="skill-number">{skill.id}</span>

              <div className="skill-icon">
                <FontAwesomeIcon icon={skill.icon} />
              </div>

              <span className="skill-eyebrow">{skill.category}</span>

              <h3 className="skill-title">{skill.name}</h3>

              <p className="skill-desc">{skill.desc}</p>

              <div className="skill-footer">
                <span>{skill.category}</span>
                <span className="skill-dot"></span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-progress">
          <div ref={skillsProgressRef} className="skills-progress-bar"></div>
        </div>
      </section>

      {/* =========================================
          PROJECTS
      ========================================== */}

      <section className="projects-section">
        <div className="projects-heading">
          <div className="section-label light">
            <span>(04)</span>
            <span>SELECTED WORK</span>
          </div>

          <p>
            SCROLL
            <br />
            TO EXPLORE →
          </p>
        </div>

        <div className="project-track">
          {/* PROJECT 01 */}

          <Link to="/projects" className="project-card project-card-one">
            <div className="project-number">01</div>

            <div className="project-image">
              <img src={images.boat} alt="Project" />
            </div>

            <div className="project-info">
              <div>
                <span>01</span>
                <h3>Digital Experience</h3>
              </div>

              <span className="project-arrow">↗</span>
            </div>
          </Link>

          {/* PROJECT 02 */}

          <Link to="/projects" className="project-card project-card-two">
            <div className="project-number">02</div>

            <div className="project-image">
              <img src={images.flaashnet} alt="Project" />
            </div>

            <div className="project-info">
              <div>
                <span>02</span>
                <h3>FlaashNet</h3>
              </div>

              <span className="project-arrow">↗</span>
            </div>
          </Link>

          {/* PROJECT 03 */}

          <Link to="/projects" className="project-card project-card-three">
            <div className="project-number">03</div>

            <div className="project-image">
              <img src={images.gemini} alt="Project" />
            </div>

            <div className="project-info">
              <div>
                <span>03</span>
                <h3>AI Experience</h3>
              </div>

              <span className="project-arrow">↗</span>
            </div>
          </Link>

          {/* PROJECT 04 */}

          <Link to="/projects" className="project-card project-card-four">
            <div className="project-number">04</div>

            <div className="project-image">
              <img src={images.beyoundchat} alt="Project" />
            </div>

            <div className="project-info">
              <div>
                <span>04</span>
                <h3>Beyond Chat</h3>
              </div>

              <span className="project-arrow">↗</span>
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================
          CONTACT
      ========================================== */}

      <section className="footer-section">
        <div className="footer-glow"></div>

        <span className="footer-ghost">05</span>

        <div className="section-label">
          <span>(05)</span>
          <span>CONTACT</span>
        </div>

        <div className="footer-main">
          <h2 className="footer-title">
            Let's make
            <br />
            something
            <br />
            <em>different.</em>
          </h2>

          <div className="footer-side">
            <p>Have an idea, project or opportunity? Let's talk.</p>

            <Link to="/contact" className="footer-button">
              Start a conversation
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Vaibhav Panchal</span>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>

            <a href="#" className="social-link">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
