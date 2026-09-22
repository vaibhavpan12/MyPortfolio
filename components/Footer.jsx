import React from "react";
import { Link } from "react-router-dom";
import "../src/assets/css/Footer.css";
function Footer() {
  return (
    <footer className="w-full text-white">
      <section className="footer-section">
        <div className="footer-glow"></div>

        <span className="footer-ghost">05</span>

        {/* Section Label */}
        <div className="section-label">
          <span>(05)</span>
          <span>CONTACT</span>
        </div>

        {/* Main Content */}
        <div className="footer-main">
          <h2 className="footer-title">
            Let's make
            <br />
            something
            <br />
            <em>different.</em>
          </h2>

          <div className="footer-side">
            <p>Have an idea, project or opportunity? Let's talk.</p>

            <Link to="/contact" className="footer-button">
              <span>Start a conversation</span>
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Vaibhav Panchal
          </span>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>

            {/* <a href="#" className="social-link">
              Instagram
            </a> */}
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
