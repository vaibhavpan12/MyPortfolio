import {
  faCss,
  faFacebook,
  faFigma,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faLinkedinIn,
  faNode,
  faReact,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import images from "../images";
import { useNavigate } from "react-router-dom";
import { faDatabase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar";
import resume from "../../public/Vaibhav_Panchal_Resume.pdf";
export default function Home() {
  const navigate = useNavigate();

  const handleDownload = () => {
    const fileUrl = resume; // File inside 'public' folder
    window.open(fileUrl, "_blank"); // Opens in a new tab
  };

  return (
    <div className="w-[100vw]  h-screen flex flex-col justify-between gap-10">
      <div className="w-[100%] bg h-[10%]">
        <Navbar />
      </div>

      <div className="w-[100%] lg:h-[80%] flex  justify-center">
        <div className=" md:w-[80%] h-[100%] py-5 flex flex-col items-center gap-5">
          {/* Top Box  */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex w-[100%] px-5 lg:flex-row flex-col lg:h-[45%] gap-5 justify-center items-center lg:px-15 lg:gap-5 "
          >
            {/* PTOFILE DIV */}
            <div className=" relative flex py-5 px-5 w-[100%] h-[40%] lg:w-[40%] lg:h-[100%]  justify-center items-center gap-10 rounded-3xl bg-gradient-to-br from-[#333333ad] via-[#141414ad] to-[#18181832] text-white">
              <img
                src={images.profile}
                alt=""
                className="xl:w-[30%] lg:w-[40%] w-[30%] "
              />
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex flex-col gap-5"
              >
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Web Developer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "App  Developer",
                    1000,
                    "FullStak Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="xl:text-lg text-[18px] text-gray-500 font-semibold fontUse"
                  repeat={Infinity}
                />
                <motion.h1
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className=" xl:text-[35px] lg:text-4xl fontUse font-bold  text-white"
                >
                  Vaibhav Ashok Panchal
                </motion.h1>
                <h1 className="fontUse font-light text-[#ffffff4a] ">
                  Ambernath , Maharastra , India
                </h1>
                <div
                  className="absolute bottom-3 hover:animate-none animate-pulse right-5 hover:text-[15.5px] text-[15px]  text-right text-gray-300 hover:text-white fontUse cursor-pointer font-bold duration-300 ease-in "
                  onClick={() => navigate("/about")}
                >
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                  >
                    About Me →
                  </motion.h1>
                </div>
              </motion.div>
            </div>
            {/* PTOFILE DIV CLOSE*/}
            {/* SKILL AND MARQUEE DIV */}
            <div className="flex w-[100%] h-[60%] lg:w-[55%] lg:h-[100%] flex-col gap-5 justify-center items-center lg:gap-5">
              {/* marqueee DIV */}
              <div className="w-[100%] h-[15%]">
                <div className="w-[100%] px-2 h-[100%] py-2 lg:text-lg lg:py-5 rounded-lg text-sm flex justify-center items-center fontUse font-semibold lg:rounded-2xl bg-gradient-to-br from-[#333333ad] via-[#141414ad] to-[#18181832] text-white">
                  <marquee
                    behavior="scroll"
                    direction="left"
                    scrollamount="10"
                    loop="-1"
                  >
                    🚀 Welcome to Vaibhav Panchal's Portfolio! 🔥 Web Developer
                    | Designer | Coder 🚀
                  </marquee>
                </div>
              </div>
              {/* marqueee DIV CLOSE*/}
              {/* SKILLS DIV  */}
              <div className="w-[100%] h-[80%] lg:py-2 flex duration-500 ease-in lg:hover:shadow-[5px_7px_10px_0px_#cfcfcf4a] p-2 overflow-hidden bg-gradient-to-br rounded-3xl from-[#333333ad] via-[#141414ad] to-[#18181832] text-white">
                <motion.h1
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="text-lg text-center py-2 px-2 font-bold fontUse "
                >
                  Skills →
                </motion.h1>
                <div className=" gap-3 flex flex-col justify-evenly text-4xl items-center">
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="flex justify-evenly flex-wrap w-[100%]"
                  >
                    <div className=" text-center">
                      <FontAwesomeIcon
                        icon={faHtml5}
                        className="text-center text-orange-700"
                      />
                      <h1 className="text-sm text-center fontUse font-semibold">
                        html
                      </h1>
                    </div>
                    <div className=" text-center">
                      <FontAwesomeIcon icon={faCss} className="text-blue-600" />
                      <h1 className="text-sm text-center text-blu fontUse font-semibold">
                        css
                      </h1>
                    </div>
                    <div className=" text-center">
                      <FontAwesomeIcon
                        icon={faJs}
                        className="text-yellow-500"
                      />
                      <h1 className="text-sm text-center fontUse font-semibold">
                        js
                      </h1>
                    </div>
                    <div className=" text-center">
                      <FontAwesomeIcon
                        icon={faNode}
                        className="text-green-600"
                      />
                      <h1 className="text-sm text-center fontUse  font-semibold">
                        node.js
                      </h1>
                    </div>
                    <div className=" text-center">
                      <FontAwesomeIcon
                        icon={faJava}
                        className="text-yellow-600"
                      />
                      <h1 className="text-sm text-center fontUse  font-semibold">
                        Java
                      </h1>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="flex  justify-evenly w-[100%]"
                  >
                    <div className=" text-center">
                      <FontAwesomeIcon
                        icon={faReact}
                        className="text-blue-900 "
                      />
                      <h1 className="text-sm text-center fontUse font-semibold">
                        React.js
                      </h1>
                    </div>
                    <div className=" text-center">
                      <FontAwesomeIcon icon={faDatabase} />
                      <h1 className="text-sm text-center fontUse font-semibold">
                        MYSQL
                      </h1>
                    </div>
                    <div className=" text-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 138 138"
                        >
                          <path
                            fill="#0acf83"
                            d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                          />
                          <path
                            fill="#a259ff"
                            d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                          />
                          <path
                            fill="#f24e1e"
                            d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                          />
                          <path
                            fill="#ff7262"
                            d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                          />
                          <path
                            fill="#1abcfe"
                            d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                          />
                        </svg>
                      </span>
                      <h1 className="text-sm text-center fontUse font-semibold ">
                        Figma
                      </h1>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    className="flex justify-evenly w-[50%]"
                  >
                    <div className="flex flex-col justify-center items-center w-[70%] ">
                      <img src={images.tailwind} alt="" className="w-[20%]" />
                      <h1 className="text-sm fontUSe font-bold">TailwindCSs</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[70%]">
                      <img src={images.blender} alt="" className="w-[20%]" />
                      <h1 className="text-sm fontUse font-bold">Blender</h1>
                    </div>
                  </motion.div>
                </div>
              </div>
              {/* SKILLS DIV CLOSE */}
            </div>
          </motion.div>

          {/* Middel Box */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex lg:flex-row flex-col w-[100%] gap-5 px-5 lg:px-20 lg:gap-10 lg:h-[45%] "
          >
            {/* certificate Div */}
            <div
              onClick={() => navigate("/certificates")}
              className="closeDiv lg:w-[25%] w-[100%] duration-500 ease-in-out lg:hover:shadow-[5px_7px_10px_0px_#cfcfcf4a] px-5 py-2 cursor-pointer rounded-3xl bg-gradient-to-br from-[#333333ad] via-[#141414ad] to-[#18181832] text-white"
            >
              <div className="w-[100%] h-[100%] flex gap-5 py-5 flex-col justify-center items-center">
                <h1 className="text-lg w-[100%] px-5 font-bold fontUse ">
                  Certificate →
                </h1>
                <motion.img
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  src={images.certificate}
                  alt="certificates"
                  className="lg:h-[100%] rounded-lg  "
                />
              </div>
            </div>
            {/* certificate Div CLOSE */}
            {/* PRJECTS DIV */}
            <div className="lg:w-[50%] w-[100%] h-100 py-2 duration-500 ease-in lg:hover:shadow-[5px_7px_10px_0px_#cfcfcf4a]  lg:h-[100%] p-2 overflow-hidden bg-gradient-to-br rounded-3xl from-[#333333ad] via-[#141414ad] to-[#18181832] text-white">
              <div
                onClick={() => navigate("/projects")}
                className="w-[100%] h-[100%] cursor-pointer relative"
              >
                <h1 className="absolute text-white z-2 text-2xl font-bold fontUs px-2 py-1 rounded-3xl">
                  Projects →
                </h1>
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: "50%" }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    src={images.boat}
                    alt=""
                    className="floating-card lg:w-[50%] absolute top-1 left-2 z-1 opacity-[50%]"
                  />
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: "50%" }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    src={images.startbusks}
                    alt=""
                    className="lg:w-[50%] w-[60%] absolute left-80 bottom-5 floating-robot opacity-0"
                  />
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: "50%" }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    src={images.gemini}
                    alt=""
                    className="lg:w-[50%] w-[60%] absolute right-2 top-0 floating-card "
                  />
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: "50%" }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    src={images.flaashnet}
                    alt=""
                    className="lg:w-[50%] w-[60%] absolute bottom-5 left-5 floating-robot"
                  />
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    src={images.beyoundchat}
                    alt=""
                    className="lg:w-[60%] w-[80%] z-3 absolute lg:bottom-5 top-20 left-10 lg:left-40 lg:top-10 floating-video "
                  />
                </div>
              </div>
            </div>
            {/* PRJECTS DIV CLOSE */}

            {/* mobileview Div */}
            <div
              onClick={() => navigate("/certificates")}
              className="openDiv hidden lg:w-[25%] w-[100%] duration-500 ease-in-out lg:hover:shadow-[5px_7px_10px_0px_#cfcfcf4a] px-5 py-2 cursor-pointer rounded-3xl bg-gradient-to-br from-[#333333ad] via-[#141414ad] to-[#18181832] text-white"
            >
              <div className="flex gap-5 py-5 flex-col justify-center items-center">
                <h1 className="text-lg w-[100%] px-5 font-bold fontUse ">
                  Certificate →
                </h1>
                <motion.img
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  src={images.certificate}
                  alt="certificates"
                  className="lg:w-[100%] rounded-lg  "
                />
              </div>
            </div>

            {/* RESUME DIV */}
            <div
              onClick={handleDownload}
              className="lg:w-[25%] duration-500 ease-in-out lg:hover:shadow-[5px_7px_10px_0px_#cfcfcf4a] px-5 py-2 cursor-pointer rounded-3xl bg-gradient-to-br from-[#333333ad] via-[#141414ad] to-[#18181832] text-white"
            >
              <div className="flex w-[100%] h-[100%] flex-col justify-center gap-2 items-center">
                <h1 className="text-lg py-2  px-5 text-left font-bold fontUse">
                  Resume →
                </h1>
                <motion.img
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  src={images.resume}
                  alt="RESUME"
                  className="lg:h-[80%] rounded-lg  "
                />
              </div>
            </div>
            {/* RESUME DIV CLOSE*/}
          </motion.div>

          {/* Bottom Box */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex  lg:px-20 px-5  justify-center items-center  w-[100%] h-[10%] lg:h-[10%]"
          >
            <div className="w-[100%]  flex justify-between lg:justify-center items-center h-[10%] bg-gradient-to-br rounded-3xl from-[#333333ad] via-[#141414ad] to-[#18181832] text-white lg:p-7 px-5 py-10">
              <h1 className="lg:w-[10%] lg:text-lg 2xl:text-2xl xl:text-[20px] font-bold fontUse text-lg">
                Social →
              </h1>
              <motion.div className="lg:w-[90%] text-[22px] flex xl:text-[20px] lg:text-2xl justify-evenly items-center">
                <motion.a
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  href="https://www.linkedin.com/in/vaibhav1223/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="cursor-pointer hover:bg-[#0062ffab] p-2 rounded-lg duration-300 ease-in"
                  />
                </motion.a>
                <motion.a
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  href="https://github.com/vaibhavdkjbdjchv?tab=repositories"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="cursor-pointer hover:text-black hover:bg-white p-2 rounded-lg duration-300 ease-in"
                  />
                </motion.a>
                <motion.a
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  href="https://www.instagram.com/vitthal12._/"
                >
                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    className="cursor-pointer duration-500 ease-in hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 p-2 rounded-lg "
                  />
                </motion.a>
                <motion.a
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  href=""
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="cursor-pointer hover:bg-[#0015ffab] p-2 rounded-lg duration-300 ease-in"
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <div className="w-[100%] h-[10%] phoneview justify-center flex items-end ">
        <div className="w-[100%] md:gap-0 gap-10 flex text-2xl md:flex-row flex-col justify-between items-center px-10">
          <motion.a
            initial={{ marginLeft: -50, opacity: 0 }}
            animate={{ marginLeft: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            href="https://www.linkedin.com/in/vaibhav1223/"
            target="_blank"
            className=" flex  text-blue-600 gap-5 items-center"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="" />
            <h1 className="font-semibold underline fontUse">Linkdin</h1>
          </motion.a>
          <motion.a
            initial={{ marginLeft: -50, opacity: 0 }}
            animate={{ marginLeft: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            href="#"
            className=" flex gap-5 items-center"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-lg" />{" "}
            <h1 className="font-semibold underline text-sm fontUse lg:text-lg">
              vaibhavpan7558@gmail.com
            </h1>
          </motion.a>
          <motion.a
            initial={{ marginRight: -50, opacity: 0 }}
            animate={{ marginRight: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            href="https://github.com/vaibhavpan12?tab=repositories"
            className=" flex gap-5 items-center justify-center"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="" />
            <h1 className="font-bold underline fontUse">Github</h1>
          </motion.a>
        </div>
      </div> */}
    </div>
  );
}
