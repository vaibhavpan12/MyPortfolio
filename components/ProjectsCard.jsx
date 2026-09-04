import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "motion/react";

function ProjectsCards({
  image,
  title,
  description,
  livelink,
  live,
  detailsLink,
  technologies = [],
}) {
  const [divactive, setDivactive] = useState(false);

  const isLive = live?.toLowerCase() === "live";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group w-full overflow-hidden rounded-3xl border border-white/10 bg-[#111111] text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
    >
      {/* ================= IMAGE ================= */}
      <div className="relative h-[220px] w-full overflow-hidden bg-[#1a1a1a] sm:h-[260px] md:h-[280px] lg:h-[300px]">
        <img
          src={image}
          alt={`${title} project preview`}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Live Badge */}
        {live && (
          <div className="absolute right-4 top-4">
            <div
              className={`relative flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur-md ${
                isLive
                  ? "border-green-400/40 bg-black/60 text-green-400"
                  : "border-white/20 bg-black/60 text-white"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                {isLive && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                )}

                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    isLive ? "bg-green-400" : "bg-white"
                  }`}
                />
              </span>

              {live}
            </div>
          </div>
        )}

        {/* Project Number */}
        <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-md">
          PROJECT
        </div>

        {/* Open Project */}
        {livelink && (
          <a
            href={livelink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 hover:scale-110"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5 sm:p-6 md:p-7">
        {/* Title + Live */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
        </div>

        {/* Description */}
        <p
          className={`mt-4 text-sm leading-7 text-white/60 sm:text-base ${
            !divactive ? "line-clamp-3" : ""
          }`}
        >
          {description}
        </p>

        {/* ================= TECHNOLOGIES ================= */}
        {technologies?.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/75 transition-colors duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ================= DETAILS ================= */}
        <AnimatePresence initial={false}>
          {divactive && detailsLink && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-white/70">
                {detailsLink}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= BUTTONS ================= */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          {livelink && (
            <a
              href={livelink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-300 ${
                isLive
                  ? "bg-white text-black hover:bg-white/90"
                  : "border border-white/20 bg-white/[0.05] text-white hover:bg-white/10"
              }`}
            >
              {isLive ? "View Live Project" : "View Project"}

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-xs"
              />
            </a>
          )}

          {detailsLink && (
            <button
              type="button"
              onClick={() => setDivactive((prev) => !prev)}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              {divactive ? "Show Less" : "More Details"}

              <FontAwesomeIcon
                icon={divactive ? faChevronUp : faChevronDown}
                className="text-xs"
              />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectsCards;
