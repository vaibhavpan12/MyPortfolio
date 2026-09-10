import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import images from "../src/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="relative z-[100] w-full px-4 md:px-6 h-[10vh]">
        <div
          className="
            h-full
            w-full
            flex
            items-center
            justify-between
          "
        >

          {/* ================= MENU BUTTON ================= */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              relative
              z-[110]
              w-12
              h-12
              md:w-14
              md:h-14
              rounded-2xl
              flex
              items-center
              justify-center
              bg-gradient-to-br
              from-[#333333ad]
              via-[#141414ad]
              to-[#18181832]
              text-white
              border
              border-white/[0.06]
              shadow-lg
              backdrop-blur-md
              duration-300
            "
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-xl text-red-500"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-xl"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>


          {/* ================= NAME ================= */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="
              absolute
              left-1/2
              -translate-x-1/2
              fontChange
              font-bold
              text-xl
              md:text-2xl
              text-white
              tracking-wide
              whitespace-nowrap
            "
          >
            Vaibhav Panchal
          </motion.div>


          {/* ================= PROFILE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              type: "spring",
              stiffness: 150,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 3,
            }}
            className="
              relative
              w-11
              h-11
              md:w-14
              md:h-14
              rounded-full
              p-[2px]
              bg-gradient-to-br
              from-white/30
              via-white/5
              to-transparent
            "
          >
            <img
              src={images.profile}
              alt="Vaibhav Panchal"
              className="
                w-full
                h-full
                rounded-full
                object-cover
                bg-[#141414]
              "
            />

            {/* online dot */}
            <span
              className="
                absolute
                bottom-0
                right-0
                w-3
                h-3
                rounded-full
                bg-green-500
                border-2
                border-[#080808]
              "
            />
          </motion.div>

        </div>
      </header>


      {/* ================= BACKDROP ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
            className="
              fixed
              inset-0
              z-[90]
              bg-black/50
              backdrop-blur-[3px]
            "
          />
        )}
      </AnimatePresence>


      {/* ================= SIDE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{
              x: "-100%",
              opacity: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: "-100%",
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28,
            }}
            className="
              fixed
              top-0
              left-0
              z-[100]
              w-[78vw]
              sm:w-[55vw]
              md:w-[38vw]
              lg:w-[28vw]
              h-screen
              px-5
              md:px-7
              pt-24
              pb-8
              rounded-r-[2rem]
              bg-gradient-to-br
              from-[#292929f5]
              via-[#111111f5]
              to-[#080808f5]
              border-r
              border-white/[0.07]
              shadow-[15px_0_50px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
              flex
              flex-col
              justify-between
            "
          >

            {/* ================= MENU HEADER ================= */}
            <div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-10 px-3"
              >
                <p className="text-xs text-gray-500 fontUse tracking-[0.2em]">
                  NAVIGATION
                </p>

                <h2 className="text-2xl font-bold text-white fontUse mt-2">
                  Explore<span className="text-gray-500">.</span>
                </h2>
              </motion.div>


              {/* ================= NAV ITEMS ================= */}
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.2,
                    },
                  },
                }}
                className="flex flex-col gap-2"
              >

                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -25,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.35,
                        },
                      },
                    }}
                  >

                    <NavLink
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `
                        group
                        relative
                        w-full
                        flex
                        items-center
                        justify-between
                        px-5
                        py-4
                        rounded-2xl
                        fontUse
                        text-sm
                        md:text-base
                        duration-300
                        ${
                          isActive
                            ? "bg-white text-black font-bold"
                            : "text-gray-400 hover:bg-white/[0.07] hover:text-white"
                        }
                        `
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{item.name}</span>

                          <motion.span
                            animate={{
                              x: isActive ? 0 : -5,
                              opacity: isActive ? 1 : 0,
                            }}
                            whileHover={{ x: 3 }}
                            className="text-sm"
                          >
                            <FontAwesomeIcon icon={faArrowRight} />
                          </motion.span>
                        </>
                      )}
                    </NavLink>

                  </motion.li>
                ))}

              </motion.ul>

            </div>


            {/* ================= MENU FOOTER ================= */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="
                px-4
                pt-5
                border-t
                border-white/[0.07]
              "
            >

              <p className="text-xs text-gray-600 fontUse">
                Full Stack Developer
              </p>

              <p className="text-xs text-gray-500 fontUse mt-1">
                Building things for the web.
              </p>

            </motion.div>

          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}