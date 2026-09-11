import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";

import images from "../images";
import Navbar from "../../components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import CreativeNav from "../../components/Header";

gsap.registerPlugin(ScrollTrigger);

/* =====================================================
   PROJECT DATA
===================================================== */

const projects = [
  {
    id: "01",
    title: "Pineverse",
    category: "Relocation & Logistics",
    type: "Full-Stack Platform",
    description:
      "A full-stack relocation marketplace connecting customers with moving and logistics service providers through requests, quotations, bidding, communication, notifications and payments.",
    image: images.pineverse,
    technologies: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Socket.IO",
      "Firebase",
      "Google Maps",
      "Cloudinary",
    ],
    link: "https://play.google.com/store/apps/details?id=com.pineverseapp&pcampaignid=web_share",
    linkText: "Google Play",
    icon: faGooglePlay,
    featured: true,
  },

  {
    id: "02",
    title: "PreMove",
    category: "Relocation Management",
    type: "Mobile Application",
    description:
      "A relocation operations platform for managing leads, customers, inventory, inspections and item tracking with barcode workflows, role-based dashboards and real-time updates.",
    image: images.premove,
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.IO",
      "Firebase",
      "Google Maps",
      "Cloudinary",
    ],
    link: "https://play.google.com/store/apps/details?id=com.premove",
    linkText: "Google Play",
    icon: faGooglePlay,
    featured: true,
  },

  {
    id: "03",
    title: "EstroVerse",
    category: "Healthcare",
    type: "Full-Stack Web App",
    description:
      "A doctor appointment platform connecting patients and doctors through online booking, authentication, doctor profiles and administrative management.",
    image: images.estroverse,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    link: "https://doctrot-appoiment-web-du5j.vercel.app/",
    linkText: "Live Project",
    icon: faArrowUpRightFromSquare,
  },

  {
    id: "04",
    title: "FlaashNet",
    category: "Business Website",
    type: "Frontend Development",
    description:
      "A responsive internet service provider website featuring modern layouts, service plans, interactive sections and responsive user experiences.",
    image: images.flaashnet,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://flaashnetwfi.netlify.app/",
    linkText: "Live Project",
    icon: faArrowUpRightFromSquare,
  },

  {
    id: "05",
    title: "Shopper",
    category: "E-Commerce",
    type: "Full-Stack Web App",
    description:
      "A full-stack e-commerce platform featuring product management, authentication, shopping cart, orders and secure payment integration.",
    image: images.shopper,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    link: "https://github.com/vaibhavpan12/SHOPPER.git",
    linkText: "GitHub",
    icon: faGithub,
  },

  {
    id: "06",
    title: "BeyondChat",
    category: "AI / Chatbot",
    type: "Web Application",
    description:
      "An AI chatbot integration and testing platform designed around chatbot interactions, authentication, website scraping and integration workflows.",
    image: images.beyoundchat,
    technologies: ["React.js", "Tailwind CSS", "Firebase"],
    link: "https://chatbeyound.vercel.app/",
    linkText: "Live Project",
    icon: faArrowUpRightFromSquare,
  },

  {
    id: "07",
    title: "Real-Time Chess",
    category: "Real-Time Application",
    type: "Multiplayer Web App",
    description:
      "A real-time multiplayer chess application using WebSocket communication for live gameplay and Chess.js for game-rule validation.",
    image: images.chess,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "Chess.js",
      "Tailwind CSS",
    ],
    link: "https://github.com/vaibhavpan12/Chess-Game-.git",
    linkText: "GitHub",
    icon: faGithub,
  },

  {
    id: "08",
    title: "SWT",
    category: "E-Commerce",
    type: "Full-Stack Web App",
    description:
      "An e-commerce platform developed with PHP and MySQL featuring authentication, product management, shopping cart, order processing and responsive UI.",
    image: images.swt,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    link: "https://github.com/vaibhavpan12/SWT-ShopWithTrust-.git",
    linkText: "GitHub",
    icon: faGithub,
  },

  {
    id: "09",
    title: "Gemini Clone",
    category: "Artificial Intelligence",
    type: "AI Chat Interface",
    description:
      "An AI-powered conversational interface inspired by modern AI assistants with API integration, responsive UI, dark mode and interactive chat experiences.",
    image: images.gemini,
    technologies: ["React.js", "Tailwind CSS", "AI API"],
    link: "https://gemini-clone-lj1j.vercel.app/",
    linkText: "Live Project",
    icon: faArrowUpRightFromSquare,
  },
];

/* =====================================================
   PROJECT CARD
===================================================== */

function ProjectCard({ project, index }) {
  return (
    <article
      className={`project-page-card ${
        project.featured ? "project-page-featured" : ""
      }`}
    >
      {/* IMAGE */}

      <div className="project-page-image-wrap">
        <div className="project-page-image">
          <img src={project.image} alt={project.title} />

          <div className="project-page-image-overlay" />
        </div>

        {/* NUMBER */}

        <div className="project-page-number">{project.id}</div>

        {/* CATEGORY */}

        <div className="project-page-category">{project.category}</div>
      </div>

      {/* CONTENT */}

      <div className="project-page-content">
        <div className="project-page-heading">
          <div>
            <span className="project-page-type">{project.type}</span>

            <h2>{project.title}</h2>
          </div>

          <span className="project-page-arrow">↗</span>
        </div>

        <p className="project-page-description">{project.description}</p>

        {/* TECH */}

        <div className="project-page-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {/* FOOTER */}

        <div className="project-page-footer">
          <span className="project-page-tech-count">
            {String(project.technologies.length).padStart(2, "0")} technologies
          </span>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-page-link"
          >
            <FontAwesomeIcon icon={project.icon} />

            <span>{project.linkText}</span>

            <span className="link-arrow">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

/* =====================================================
   PROJECT PAGE
===================================================== */

export default function Projects() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HEADER */

      gsap.from(
        ".projects-page-label, .projects-page-title, .projects-page-description",
        {
          y: 70,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
        },
      );

      /* PROJECT CARDS */

      gsap.utils.toArray(".project-page-card").forEach((card, index) => {
        gsap.from(card, {
          y: 100,

          opacity: 0,

          duration: 1,

          ease: "power4.out",

          scrollTrigger: {
            trigger: card,

            start: "top 88%",

            toggleActions: "play none none reverse",
          },
        });
      });

      /* IMAGE PARALLAX */

      gsap.utils.toArray(".project-page-image img").forEach((image) => {
        gsap.to(image, {
          yPercent: -8,

          ease: "none",

          scrollTrigger: {
            trigger: image.closest(".project-page-card"),

            start: "top bottom",

            end: "bottom top",

            scrub: 0.6,
          },
        });
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>   <CreativeNav/>
      {" "}
      <main ref={pageRef} className="projects-page">
        {/* =================================================
          BACKGROUND
      ================================================= */}

        <div className="projects-page-glow glow-one" />
        <div className="projects-page-glow glow-two" />

        <div className="projects-page-noise" />

        {/* =================================================
          NAVBAR
      ================================================= */}

        {/* <Navbar /> */}

        {/* =================================================
          HEADER
      ================================================= */}

        <section className="projects-page-header">
          <div className="projects-page-label">
            <span className="label-line" />

            <span>SELECTED WORK</span>

            <span>(09)</span>
          </div>

          <div className="projects-page-title-wrap">
            <h1 className="projects-page-title">
              <span>Selected</span>

              <span className="projects-page-title-outline">Projects</span>
            </h1>

            <div className="projects-page-meta">
              <span>09 PROJECTS</span>

              <span>2023 — 2026</span>
            </div>
          </div>

          <p className="projects-page-description">
            A collection of digital products, web applications, mobile
            experiences and AI-driven systems I've designed and built.
          </p>
        </section>

        {/* =================================================
          PROJECTS
      ================================================= */}

        <section className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>

        {/* =================================================
          END CTA
      ================================================= */}

        <section className="projects-page-end">
          <div className="end-label">HAVE A PROJECT?</div>

          <h2>
            Let's build
            <br />
            <em>something great.</em>
          </h2>

          <Link to="/contact" className="projects-contact-button">
            <span>Start a conversation</span>

            <span>↗</span>
          </Link>

          <div className="projects-page-footer">
            <span>VAIBHAV PANCHAL</span>

            <span>FULL-STACK DEVELOPER</span>

            <span>INDIA</span>
          </div>
        </section>
      </main>
    </>
  );
}
