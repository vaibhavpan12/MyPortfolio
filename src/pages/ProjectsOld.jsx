import React from "react";
import images from "../images";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    id: "01",
    title: "Pineverse",
    category: "Relocation & Logistics Platform",
    type: "Featured Project",
    description:
      "A full-stack relocation marketplace connecting customers with moving and logistics service providers. Built customer and vendor workflows for requests, quotations, bidding, communication, notifications and payments.",
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
    linkText: "View Project",
    icon: faGooglePlay,
    featured: true,
  },

  {
    id: "02",
    title: "PreMove",
    category: "Relocation Management App",
    type: "Mobile Application",
    description:
      "A relocation operations platform built to manage leads, customers, inventory, inspections and item tracking. Includes barcode workflows, role-based dashboards, documents and real-time operational updates.",
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
    category: "Healthcare Platform",
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
      "A responsive business website developed for an internet service provider, featuring modern layouts, service plans, interactive sections and responsive experiences.",
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
      "A full-stack e-commerce platform with product management, authentication, shopping cart, orders and secure payment integration.",
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
    linkText: "View on GitHub",
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
    linkText: "View on GitHub",
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
    linkText: "View on GitHub",
    icon: faGithub,
  },

  {
    id: "09",
    title: "Gemini Clone",
    category: "Artificial Intelligence",
    type: "AI Chat Interface",
    description:
      "An AI-powered conversational interface inspired by modern AI assistants, featuring API integration, responsive UI, dark mode and interactive chat experiences.",
    image: images.gemini,
    technologies: ["React.js", "Tailwind CSS", "AI API"],
    link: "https://gemini-clone-lj1j.vercel.app/",
    linkText: "Live Project",
    icon: faArrowUpRightFromSquare,
  },
];

function ProjectCard({ project }) {
  return (
    <article
      className={`
        group relative overflow-hidden rounded-[28px]
        border border-black/10 dark:border-white/10
        bg-white/70 dark:bg-white/[0.04]
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-2
        hover:border-black/20 dark:hover:border-white/20
        hover:shadow-2xl
        ${project.featured ? "lg:col-span-2" : ""}
      `}
    >
      {/* Image */}
      <div
        className={`
          relative overflow-hidden
          ${project.featured ? "h-[280px] sm:h-[380px]" : "h-[240px] sm:h-[280px]"}
        `}
      >
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full w-full object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/70 via-black/10 to-transparent
          "
        />

        {/* Project number */}
        <div
          className="
            absolute left-5 top-5
            flex h-10 w-10 items-center justify-center
            rounded-full
            border border-white/20
            bg-black/30
            backdrop-blur-md
            text-sm font-semibold text-white
          "
        >
          {project.id}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div
            className="
              absolute right-5 top-5
              rounded-full
              border border-white/20
              bg-white/15
              px-4 py-2
              text-xs font-medium
              text-white
              backdrop-blur-md
            "
          >
            Featured
          </div>
        )}

        {/* Category on image */}
        <div className="absolute bottom-5 left-5">
          <span
            className="
              rounded-full
              border border-white/20
              bg-black/30
              px-3 py-1.5
              text-xs font-medium
              text-white
              backdrop-blur-md
            "
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              {project.type}
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h2>
          </div>

          {/* Arrow */}
          <div
            className="
              flex h-11 w-11 shrink-0 items-center justify-center
              rounded-full
              border border-black/10 dark:border-white/10
              bg-black/[0.03] dark:bg-white/[0.05]
              transition-all duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
            "
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-sm"
            />
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-sm sm:text-[15px] leading-7 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
            Tech Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border border-black/10 dark:border-white/10
                  bg-black/[0.03] dark:bg-white/[0.05]
                  px-3 py-1.5
                  text-xs sm:text-[13px]
                  font-medium
                  text-gray-700 dark:text-gray-300
                  transition-colors
                  group-hover:bg-black/[0.06]
                  dark:group-hover:bg-white/[0.08]
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-7 flex items-center justify-between
            gap-4 border-t border-black/10
            dark:border-white/10 pt-5
          "
        >
          <span className="text-xs font-medium text-gray-400">
            {project.technologies.length} technologies
          </span>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-black px-5 py-2.5
              text-sm font-semibold text-white
              transition-all duration-300
              hover:scale-[1.03]
              hover:bg-gray-800
              dark:bg-white
              dark:text-black
              dark:hover:bg-gray-200
            "
          >
            <FontAwesomeIcon icon={project.icon} />
            {project.linkText}
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      <main className="w-full">
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-current opacity-40" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                    Selected Work
                  </span>
                </div>

                <h1 className="text-4xl font-bold tracking-[-0.04em] text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                  Projects
                  <span className="ml-2 text-gray-400">↗</span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                  A collection of products and applications I've built across
                  web, mobile, AI, e-commerce and real-time systems.
                </p>
              </div>

              {/* Project count */}
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium dark:border-white/10 dark:bg-white/[0.04]">
                  {projects.length} Projects
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              PROJECT GRID
          ====================================================== */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* =====================================================
              FOOTER CTA
          ====================================================== */}
          <div
            className="
              mt-16 overflow-hidden rounded-[28px]
              border border-black/10
              bg-black/[0.03]
              p-7 dark:border-white/10
              dark:bg-white/[0.04]
              sm:mt-20 sm:p-10
            "
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  More to explore
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Interested in what I can build?
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Let's build something useful, scalable and impactful.
                </p>
              </div>

              <a
                href="https://github.com/vaibhavpan12"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex w-fit items-center gap-2
                  rounded-full
                  border border-black/10
                  bg-white px-5 py-3
                  text-sm font-semibold
                  text-black
                  transition-all
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  dark:border-white/10
                  dark:bg-white
                "
              >
                <FontAwesomeIcon icon={faGithub} />
                Explore GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
