import React from "react";
import { Link } from "react-router-dom";
import "../src/assets/css/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <section className="contact-footer">
        <div className="contact-footer__glow"></div>

        <span className="contact-footer__ghost">05</span>

        {/* Section Label */}
        <div className="contact-footer__label">
          <span>(05)</span>
          <span>CONTACT</span>
        </div>

        {/* Main Content */}
        <div className="contact-footer__content">
          <h2 className="contact-footer__heading">
            Let's make
            <br />
            something
            <br />
            <em>different.</em>
          </h2>

          <div className="contact-footer__info">
            <p className="contact-footer__description">
              Have an idea, project or opportunity? Let's talk.
            </p>

            <Link to="/contact" className="contact-footer__cta">
              <span>Start a conversation</span>
              <span className="contact-footer__arrow">↗</span>
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="contact-footer__bottom">
          <span className="contact-footer__copyright">
            © {new Date().getFullYear()} Vaibhav Panchal
          </span>

          <div className="contact-footer__socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-footer__social"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-footer__social"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;