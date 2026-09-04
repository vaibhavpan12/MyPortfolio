import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";
import images from "../src/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [active2, setActive2] = useState(true);

  function navbarVisibale() {
    setActive2(!active2);
  }

  return (
    <div className=" w-[100vw]  px-2 h-[10vh] flex justify-between items-center ">
      <nav className="w-[10%]  text-white flex flex-col justify-start items-center ">
        <div className=" z-999 text-7xl px-5" onClick={navbarVisibale}>
          {active2 ? (
            <FontAwesomeIcon icon={faBars} className="w-7" />
          ) : (
            <FontAwesomeIcon icon={faXmark} className="w-7 text-red-600" />
          )}
        </div>
        <div className=" absolute bg top-0 z-99 left-0 flex justify-start items-start">
          <motion.ul
            className={`lg:w-[20vw]  w-[50vw] fixed py-15 lg:py-10 h-[100vh] text-sm lg:text-lg flex flex-col justify-evenly rounded-r-3xl items-center lg:px-5 px-2 text-center duration-700 ease-in  bg-[#3b3b3bce] fontChange  ${
              active2 ? "-translate-x-[100%]" : "translate-x-[0]"
            }`}
          >
            <li className="w-full py-3 duration-700 ease-in-out hover:bg-white hover:text-black  ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` fontUse py-3 px-10 rounded-md ${
                    isActive
                      ? "bg-white  text-black font-bold"
                      : "hover:text-gray-400"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="w-full py-3 duration-700 ease-in-out hover:bg-white hover:text-black ">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-10 py-3 fontUse  rounded-md ${
                    isActive ? "bg-white text-black font-bold" : "hover:black"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li className="w-full py-3 duration-700 ease-in-out hover:bg-white hover:text-black ">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `px-10 py-2 fontUse  rounded-md ${
                    isActive
                      ? "bg-white text-black font-bold"
                      : "hover:text-black"
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="w-full py-3 duration-700 ease-in-out hover:bg-white hover:text-black ">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-10 py-2 fontUse  rounded-md ${
                    isActive
                      ? "bg-white text-black font-bold"
                      : "hover:text-black"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </motion.ul>
        </div>
      </nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fontChange w-[80%] text-center font-bold text-2xl"
      >
        Vaibhav Panchal
      </motion.div>
      <div className="w-[10%]">
        <img src={images.profile} alt="" className="w-15 animate-pulse" />
      </div>
    </div>
  );
}
