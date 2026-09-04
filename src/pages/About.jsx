import React from "react";
import Navbar from "../../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b  text-white px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gradient mb-4">About Me</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            👋 Hi, I'm{" "}
            <span className="text-blue-400">Vaibhav Ashok Panchal!</span> A
            passionate **Full-Stack Web Developer** with expertise in **React,
            JavaScript, Node.js, and Tailwind CSS**. I love building modern,
            scalable web applications with seamless user experiences.
          </p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-200 mb-2">
            What I Do
          </h2>
          <ul className="list-disc pl-5 text-gray-300">
            <li>
              🚀 Front-End Development: React, Tailwind CSS, HTML, CSS,
              JavaScript,GSAP,Locomotive.
            </li>
            <li>
              ⚙️ Back-End Development: Node.js, Express.js, MongoDB, MySQL.
            </li>
            <li>📱 Mobile App Development: React Native (Expo).</li>
            <li>
              🛠 Full-Stack Projects: CRUD, authentication, API development.
            </li>
          </ul>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-200 mb-2">
            Key Projects
          </h2>
          <ul className="list-disc pl-5 text-gray-300">
            <li>
              ✅ <strong>Beyond Chat</strong> – AI chatbot integration platform
              (React + Tailwind).
            </li>
            <li>
              ✅ <strong>Shopper E-Commerce</strong> – A complete e-commerce
              website built using React.
            </li>
            <li>
              ✅ <strong>SWT (Shop With Trust)</strong> – Online shopping
              platform (React, PHP, MySQL).
            </li>
            <li>
              ✅ <strong>FlaashNet Website</strong> – A front-end website for an
              Internet provider (HTML, CSS, JS).
            </li>
          </ul>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-200 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-300">
            📩 <strong>Email:</strong>{" "}
            <a href="mailto:your-email@example.com" className="text-blue-400">
              vaibhavpan7558@gmail.com
            </a>
          </p>
          <p className="text-gray-300">
            🔗 <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/vaibhav-panchal12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              linkedin.com/in/vaibhav-panchal12
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
