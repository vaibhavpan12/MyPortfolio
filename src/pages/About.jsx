import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faCode, faLightbulb, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreativeNav from "../../components/Header";
import "../assets/css/About.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "02",
    category: "Relocation & logistics",
    title: "Pineverse",
    description: "A marketplace connecting people moving home with logistics providers, quotes and booking tools.",
    stack: "React · React Native · Node.js · Socket.IO",
    href: "https://play.google.com/store/apps/details?id=com.pineverseapp&pcampaignid=web_share",
    link: "View on Google Play",
  },
  {
    number: "03",
    category: "Mobile operations",
    title: "PreMove",
    description: "A mobile platform for relocation teams to manage leads, inspections and inventory tracking.",
    stack: "React Native · Node.js · MySQL · Firebase",
    href: "https://play.google.com/store/apps/details?id=com.premove",
    link: "View on Google Play",
  },
  {
    number: "04",
    category: "Healthcare",
    title: "EstroVerse",
    description: "A doctor appointment platform with patient booking, doctor profiles and administration tools.",
    stack: "React · Node.js · Express · MongoDB",
    href: "https://doctrot-appoiment-web-du5j.vercel.app/",
    link: "Visit website",
  },
];

const skillAreas = [
  {
    title: "Frontend & UI",
    description: "I build clear, responsive interfaces and add motion where it improves the experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    icon: faLightbulb,
  },
  {
    title: "Full-stack & APIs",
    description: "I connect the interface to reliable APIs, authentication and data models.",
    technologies: ["Node.js", "Express", "REST APIs", "MongoDB", "MySQL", "JWT"],
    icon: faCode,
  },
  {
    title: "Mobile apps",
    description: "I create cross-platform apps and product flows that feel at home on mobile.",
    technologies: ["React Native", "Expo", "Firebase"],
    icon: faMobileScreenButton,
  },
];

function About() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduceMotion) {
        gsap.timeline({ defaults: { ease: "power3.out" } })
          .from(".vp-about-eyebrow", { y: 16, opacity: 0, duration: 0.5 })
          .from(".vp-about-hero h1", { y: 55, opacity: 0, duration: 0.8 }, "-=0.2")
          .from(".vp-about-intro, .vp-about-meta", { y: 20, opacity: 0, stagger: 0.12, duration: 0.6 }, "-=0.35");

        const timelineItems = gsap.utils.toArray(".vp-about-timeline-item");
        gsap.utils.toArray(".vp-about-feature, .vp-about-work-row, .vp-about-timeline-item, .vp-about-contact").forEach((item) => {
          const timelineIndex = timelineItems.indexOf(item);
          const isTimelineItem = timelineIndex >= 0;
          const fromX = item.classList.contains("is-left") ? -48 : item.classList.contains("is-right") ? 48 : 0;
          gsap.from(item, {
            x: fromX,
            y: 20,
            opacity: 0,
            duration: isTimelineItem ? 0.9 : 0.7,
            delay: isTimelineItem ? timelineIndex * 0.12 : 0,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: isTimelineItem ? "top 76%" : "top 86%", once: true },
          });
        });
      }
    }, root);

    return () => context.revert();
  }, []);

  return (
    <main ref={pageRef} className="vp-about">
      <CreativeNav />
      <section className="vp-about-hero">
        <div className="vp-about-hero-content">
          <p className="vp-about-eyebrow">ABOUT / FULL-STACK DEVELOPER</p>
          <h1>Vaibhav Panchal</h1>
          <p className="vp-about-intro">
            I build web and mobile products from the first interface to the backend that powers them.
            I care about clear design, useful features and software that works beyond the demo.
          </p>
          <div className="vp-about-meta">
            <span>Full-stack · Web · Mobile</span>
            <span>India · Open to new roles</span>
            <Link to="/projects">Explore all projects <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <span className="vp-about-hero-index" aria-hidden="true">01 / 04</span>
      </section>

      <section className="vp-about-work">
        <div className="vp-about-section-head">
          <p className="vp-about-eyebrow">02 / SELECTED WORK</p>
          <h2>Built to be used.</h2>
        </div>
        <article className="vp-about-feature">
          <a className="vp-about-feature-image" href="https://pivoraai.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Visit the Pivora AI shopping website">
            <img src="/images/Pivora.png" alt="Pivora AI-powered shopping website" />
            <span className="vp-about-image-link">VISIT PIVORA ↗</span>
          </a>
          <div className="vp-about-feature-copy">
            <p className="vp-about-project-type">AI-POWERED E-COMMERCE</p>
            <h3>Pivora</h3>
            <p>
              An online shopping experience with product discovery, search, cart and checkout—plus an AI assistant
              that helps people find products through natural-language prompts.
            </p>
            <div className="vp-about-tags">
              <span>React</span><span>Python</span><span>MongoDB</span><span>Llama 3.2</span>
            </div>
            <a className="vp-about-project-link" href="https://pivoraai.vercel.app/" target="_blank" rel="noopener noreferrer">
              Explore the live website <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        <div className="vp-about-work-list">
          {projects.map((project) => (
            <article className="vp-about-work-row" key={project.title}>
              <span className="vp-about-work-number">{project.number}</span>
              <div className="vp-about-work-main">
                <p className="vp-about-project-type">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="vp-about-work-stack">{project.stack}</span>
              </div>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                {project.link} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
        <Link className="vp-about-all-work" to="/projects">See all projects <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="vp-about-timeline">
        <header className="vp-about-timeline-heading">
          <p className="vp-about-eyebrow">03 / CAPABILITIES &amp; SKILLS</p>
          <h2>What I bring to a product.</h2>
        </header>
        <div className="vp-about-timeline-list">
          {skillAreas.map((area, index) => (
            <article
              className={`vp-about-timeline-item ${index % 2 === 0 ? "is-left" : "is-right"}`}
              key={area.title}
            >
              <div className="vp-about-timeline-card">
                <span className="vp-about-timeline-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={area.icon} />
                </span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="vp-about-tags">
                  {area.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </div>
              <span className="vp-about-timeline-node" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="vp-about-contact">
        <div>
          <p className="vp-about-eyebrow">04 / HAVE A PROJECT OR ROLE IN MIND?</p>
          <h2>Let’s build something useful.</h2>
        </div>
        <a href="mailto:vaibhavpan7558@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}

export default About;
