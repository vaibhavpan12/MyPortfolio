import React, { useLayoutEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/css/About.css";

gsap.registerPlugin(ScrollTrigger);
import CreativeNav from "../../components/Header";
function About() {
  const pageRef = useRef(null);
  const capabilities = [
    {
      title: "Frontend development",
      description:
        "Component-driven interfaces built with React and Tailwind — sized for performance, accessible by default, with motion that earns its place instead of decorating the page.",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "GSAP"],
    },
    {
      title: "Backend development",
      description:
        "REST APIs, authentication and data models designed to hold up as traffic and requirements change, not just to pass a demo.",
      technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "JWT"],
    },
    {
      title: "Mobile development",
      description:
        "Cross-platform apps in React Native — sharing logic with the web product where it makes sense, and diverging where the platform demands it.",
      technologies: ["React Native", "Expo", "JavaScript"],
    },
    {
      title: "Full-stack delivery",
      description:
        "Ownership from database schema to deployed interface, so context isn't lost in the handoff between layers of the stack.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Git", "GitHub"],
    },
  ];

  const approach = [
    {
      title: "Product thinking",
      description:
        "Code is a means, not the goal. Technical decisions trace back to what the person using the product actually needs from it.",
    },
    {
      title: "Full-stack fluency",
      description:
        "Comfortable moving between a database schema, an API contract and a component tree in the same afternoon.",
    },
    {
      title: "Considered interfaces",
      description:
        "Interfaces that stay quiet by default — clear hierarchy, deliberate motion, nothing competing for attention it hasn't earned.",
    },
    {
      title: "Iteration over perfection",
      description:
        "Complex requirements get broken into small, shippable pieces, then improved against real feedback rather than guesswork.",
    },
  ];

  const stack = [
    {
      category: "Frontend",
      items: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "GSAP"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST API", "JWT"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Expo"],
    },
    {
      category: "Tooling",
      items: ["Git", "GitHub", "Vercel", "Render"],
    },
  ];

  const projects = [
    {
      title: "Beyond Chat",
      category: "AI product",
      description:
        "A chatbot platform with a React interface, built to keep long conversations legible and fast on lower-end devices.",
      stack: ["React.js", "Tailwind CSS", "AI Integration"],
    },
    {
      title: "Shopper",
      category: "E-commerce",
      description:
        "A product browsing and checkout experience focused on getting from search to cart with as little friction as possible.",
      stack: ["React.js", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "SWT — Shop With Trust",
      category: "Full-stack application",
      description:
        "An online marketplace with a database-driven backend, built on a traditional full-stack toolchain end to end.",
      stack: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
    },
    {
      title: "FlaashNet",
      category: "Business website",
      description:
        "A responsive marketing site for an internet service provider, built for clarity on a slow connection as much as a fast one.",
      stack: ["HTML", "CSS", "JavaScript"],
    },
  ];

  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      // HERO — restrained, editorial entrance.
      const hero = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      hero
        .from(".vp-about-hero-name", {
          y: 90,
          opacity: 0,
          duration: 1.15,
          delay: 0.12
        })
        .from(".vp-about-hero-role", {
          y: 30,
          opacity: 0,
          duration: 0.7
        }, "-=0.72")
        .from(".vp-about-hero-description", {
          y: 25,
          opacity: 0,
          duration: 0.65
        }, "-=0.42")
        .from(".vp-about-hero-spec", {
          y: 16,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5
        }, "-=0.38");

      // Subtle hero parallax — no excessive movement.
      gsap.to(".vp-about-hero-name", {
        yPercent: 9,
        ease: "none",
        scrollTrigger: {
          trigger: ".vp-about-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2
        }
      });

      // Section headings — clip reveal.
      root.querySelectorAll(".vp-about-section-heading").forEach((heading) => {
        const split = heading.textContent.trim().split(/(\s+)/);
        heading.innerHTML = split
          .map((part) =>
            /\s+/.test(part)
              ? part
              : `<span class="vp-about-word"><span class="vp-about-word-inner">${part}</span></span>`
          )
          .join("");

        gsap.from(heading.querySelectorAll(".vp-about-word-inner"), {
          yPercent: 110,
          opacity: 0,
          duration: 0.85,
          stagger: 0.055,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 84%",
            once: true
          }
        });
      });

      // General content reveal.
      const revealGroups = [
        ".vp-about-background-grid",
        ".vp-about-approach-item",
        ".vp-about-capability-item",
        ".vp-about-stack-group",
        ".vp-about-project-row",
        ".vp-about-contact"
      ];

      revealGroups.forEach((selector) => {
        root.querySelectorAll(selector).forEach((item) => {
          gsap.from(item, {
            y: 42,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true
            }
          });
        });
      });

      // Stagger capability tags when their row enters.
      root.querySelectorAll(".vp-about-capability-item").forEach((item) => {
        const tags = item.querySelectorAll(".vp-about-capability-tags span");
        if (!tags.length) return;

        gsap.from(tags, {
          y: 12,
          opacity: 0,
          scale: 0.96,
          stagger: 0.045,
          duration: 0.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            once: true
          }
        });
      });

      // Project rows: professional hover motion.
      root.querySelectorAll(".vp-about-project-row").forEach((row) => {
        const title = row.querySelector("h3");
        if (!title) return;

        const enter = () => gsap.to(title, {
          x: 12,
          color: "var(--about-orange-bright)",
          duration: 0.35,
          ease: "power2.out"
        });

        const leave = () => gsap.to(title, {
          x: 0,
          color: "var(--about-text)",
          duration: 0.35,
          ease: "power2.out"
        });

        row.addEventListener("mouseenter", enter);
        row.addEventListener("mouseleave", leave);

        return () => {
          row.removeEventListener("mouseenter", enter);
          row.removeEventListener("mouseleave", leave);
        };
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="vp-about">
      {/* <Navbar /> */}
      <CreativeNav/>

      {/* ================= HERO ================= */}
      <section className="vp-about-hero">
        <div className="vp-about-hero-top">
          <h1 className="vp-about-hero-name">Vaibhav Panchal</h1>
          <p className="vp-about-hero-role">
            Full-stack developer building web and mobile products, and the
            APIs that connect them.
          </p>
        </div>

        <div className="vp-about-hero-bottom">
          <p className="vp-about-hero-description">
            I work across React, Node.js and React Native to take a product
            from data model to deployed interface — favouring plain,
            maintainable solutions over clever ones.
          </p>

          <dl className="vp-about-hero-specs">
            <div className="vp-about-hero-spec">
              <dt>Based in</dt>
              <dd>India</dd>
            </div>
            <div className="vp-about-hero-spec">
              <dt>Focus</dt>
              <dd>Full-stack &amp; React Native</dd>
            </div>
            <div className="vp-about-hero-spec">
              <dt>Status</dt>
              <dd>Open to new roles</dd>
            </div>
          </dl>
        </div>

        <div className="vp-about-hero-scroll" aria-hidden="true">
          <span className="vp-about-hero-scroll-line"></span>
        </div>
      </section>

      {/* ================= BACKGROUND ================= */}
      <section className="vp-about-section">
        <div className="vp-about-section-head">
          <span className="vp-about-section-index">01</span>
          <h2 className="vp-about-section-heading">Background</h2>
        </div>

        <div className="vp-about-background-grid">
          <p className="vp-about-background-lead">
            Most of what I build sits at the point where a good interface
            meets a system that actually holds up.
          </p>

          <div className="vp-about-background-body">
            <p>
              I'm Vaibhav Ashok Panchal, a full-stack developer working
              across frontend, backend and mobile. What interests me is how
              the pieces connect — how a database decision shows up as a
              loading state three layers up, or how an API shape makes a
              component simpler or harder to write.
            </p>
            <p>
              My core stack is React.js, Node.js, Express.js, MongoDB and
              MySQL, with React Native for mobile and GSAP where an
              interaction needs more than a CSS transition can give it.
            </p>
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="vp-about-section vp-about-approach-section">
        <div className="vp-about-section-head">
          <span className="vp-about-section-index">02</span>
          <h2 className="vp-about-section-heading">Approach</h2>
        </div>

        <div className="vp-about-approach-grid">
          {approach.map((item) => (
            <div className="vp-about-approach-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="vp-about-section">
        <div className="vp-about-section-head">
          <span className="vp-about-section-index">03</span>
          <h2 className="vp-about-section-heading">Capabilities</h2>
        </div>

        <div className="vp-about-capabilities-list">
          {capabilities.map((capability) => (
            <div className="vp-about-capability-item" key={capability.title}>
              <div className="vp-about-capability-content">
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
              <div className="vp-about-capability-tags">
                {capability.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STACK ================= */}
      <section className="vp-about-section vp-about-stack-section">
        <div className="vp-about-section-head">
          <span className="vp-about-section-index">04</span>
          <h2 className="vp-about-section-heading">Stack</h2>
        </div>

        <p className="vp-about-stack-intro">
          The tools I reach for most, grouped by where they sit in a
          product.
        </p>

        <div className="vp-about-stack-grid">
          {stack.map((group) => (
            <div className="vp-about-stack-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SELECTED WORK ================= */}
      <section className="vp-about-section vp-about-projects-section">
        <div className="vp-about-section-head">
          <span className="vp-about-section-index">05</span>
          <h2 className="vp-about-section-heading">Selected work</h2>
        </div>

        <div className="vp-about-projects-list">
          {projects.map((project) => (
            <article className="vp-about-project-row" key={project.title}>
              <span className="vp-about-project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="vp-about-project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="vp-about-contact">
        <p className="vp-about-contact-kicker">Have a project or a role in mind?</p>

        <h2 className="vp-about-contact-heading">Let's build something.</h2>

        <p className="vp-about-contact-body">
          I'm open to frontend, full-stack and React Native roles where I
          can contribute early, keep learning, and help ship something
          people actually use.
        </p>

        <a href="mailto:vaibhavpan7558@gmail.com" className="vp-about-contact-cta">
          Get in touch
        </a>

        <div className="vp-about-contact-links">
          <a href="mailto:vaibhavpan7558@gmail.com">
            vaibhavpan7558@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-panchal12"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;