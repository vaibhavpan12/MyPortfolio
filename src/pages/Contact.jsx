import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/Navbar";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4g3lrxu", // Replace with your Service ID
        "template_52ec1bb", // Replace with your Template ID
        form.current,
        "xejoGEA8JAYxcSpJO" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Email error:", error.text);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div className=" w-screen h-screen flex text-white fontUse flex-col items-center min-h-screen p-4">
      <div className="w-[100%] h-[10%]">
        <Navbar />
      </div>
      <div className="w-[100%] h-[90%] flex-col text-black flex justify-center items-center">
        <h2 className="text-2xl font-bold mb-4 text-white fontUse">
          Contact Me
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white py-6 px-5  rounded-lg shadow-lg max-w-md w-full"
        >
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="from_name"
            className="w-full p-2 border rounded-md mb-4"
            required
          />

          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full p-2 border rounded-md mb-4"
            required
          />

          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            className="w-full p-2 border rounded-md mb-4"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
        {status && (
          <p className="mt-4 text-green-600 font-bold fontUse text-2xl">
            {status}
          </p>
        )}
        <div className="w-[25%] flex justify-center items-center rounded-lg  mt-10 py-5 bg-white">
          <motion.div className="lg:w-[90%] text-[22px] flex xl:text-[20px] lg:text-2xl justify-evenly items-center">
            <motion.a
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              href="https://www.linkedin.com/in/vaibhav-panchal12"
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
                className="cursor-pointer  hover:bg-gray-700 hover:text-white p-2 rounded-lg duration-300 ease-in"
              />
            </motion.a>
            <motion.a
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
              href="https://www.instagram.com/vitt_hal_12?utm_source=qr&igsh=ZTR1N3h3NDBuMGdh"
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
      </div>
    </div>
  );
};

export default Contact;
