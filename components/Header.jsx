import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

function CreativeNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      number: "01",
      name: "Home",
      path: "/",
    },
    {
      number: "02",
      name: "About",
      path: "/about",
    },
    {
      number: "03",
      name: "Projects",
      path: "/projects",
    },
    {
      number: "04",
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <header className="creative-nav">

        {/* LOGO */}

        <Link
          to="/"
          className="creative-logo"
        >
          <span className="logo-circle"></span>

          <span>VP</span>
        </Link>


        {/* CENTER */}

        <div className="nav-middle">

          <span>
            Frontend Developer
          </span>

          <span>
            India
          </span>

        </div>


        {/* MENU */}

        <button
          type="button"
          className={`menu-button ${
            menuOpen ? "menu-active" : ""
          }`}
          onClick={() => setMenuOpen(true)}
        >

          <span>
            Menu
          </span>

          <span className="menu-icon">
            ↗
          </span>

        </button>

      </header>


      {/* =========================
          MENU OVERLAY + SIDEBAR
      ========================= */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            className="creative-menu-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            onClick={() =>
              setMenuOpen(false)
            }
          >

            {/* SIDEBAR */}

            <motion.aside
              className="creative-sidebar"
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.65,
                ease: [0.76, 0, 0.24, 1],
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* SIDEBAR TOP */}

              <div className="sidebar-top">

                <Link
                  to="/"
                  className="creative-logo"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >

                  <span className="logo-circle"></span>

                  <span>VP</span>

                </Link>


                <button
                  className="sidebar-close"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >

                  <span>
                    Close
                  </span>

                  <span>
                    ×
                  </span>

                </button>

              </div>


              {/* MENU TITLE */}

              <div className="sidebar-heading">

                <span>
                  Navigation
                </span>

                <span>
                  (04)
                </span>

              </div>


              {/* LINKS */}

              <nav className="sidebar-links">

                {menuItems.map(
                  (item, index) => (

                    <motion.div
                      key={item.name}
                      initial={{
                        opacity: 0,
                        y: 35,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay:
                          0.2 +
                          index * 0.08,
                        duration: 0.6,
                        ease:
                          "easeOut",
                      }}
                    >

                      <NavLink
                        to={item.path}
                        onClick={() =>
                          setMenuOpen(false)
                        }
                        className="sidebar-link"
                      >

                        <span className="sidebar-number">
                          {item.number}
                        </span>

                        <span className="sidebar-name">
                          {item.name}
                        </span>

                        <span className="sidebar-arrow">
                          ↗
                        </span>

                      </NavLink>

                    </motion.div>

                  )
                )}

              </nav>


              {/* SIDEBAR BOTTOM */}

              <div className="sidebar-bottom">

                <div>

                  <span>
                    Available for
                  </span>

                  <strong>
                    Freelance work
                  </strong>

                </div>

                <div>

                  <span>
                    Based in
                  </span>

                  <strong>
                    India
                  </strong>

                </div>

              </div>

            </motion.aside>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default CreativeNav;