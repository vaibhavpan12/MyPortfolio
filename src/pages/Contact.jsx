import React, { useLayoutEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";

import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../assets/css/Contact.css";

const Contact = () => {
  const pageRef = useRef(null);
  const formRef = useRef(null);

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  useLayoutEffect(() => {
    const root = pageRef.current;

    if (!root) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".vp-contact-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".vp-contact-title-line",
          {
            yPercent: 110,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .from(
          ".vp-contact-intro",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          ".vp-contact-form-card",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.35",
        )
        .from(
          ".vp-contact-side-item",
          {
            x: 25,
            opacity: 0,
            duration: 0.55,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          ".vp-contact-social",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.3",
        );

      gsap.to(".vp-contact-orb", {
        y: -25,
        x: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus("");

    try {
      const result = await emailjs.sendForm(
        "service_9tgeql6",
        "template_rr5ed5j",
        formRef.current,
        "xyF3LHBwCIS8u00GL",
      );

      console.log("Email sent:", result.text);

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Email error:", error);

      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main ref={pageRef} className="vp-contact-page">
      {/* Background */}
      <div className="vp-contact-background">
        <div className="vp-contact-grid" />
        <div className="vp-contact-orb" />
      </div>

      <section className="vp-contact-hero">
        <div className="vp-contact-header">
          <div className="vp-contact-eyebrow">
            <span className="vp-contact-dot" />
            AVAILABLE FOR WORK
          </div>

          <h1 className="vp-contact-title">
            <span className="vp-contact-title-line">Let's build</span>
            <span className="vp-contact-title-line">
              something <em>great.</em>
            </span>
          </h1>

          <p className="vp-contact-intro">
            Have an idea, project, or opportunity in mind?
            <br />
            Drop me a message and let's talk.
          </p>
        </div>

        <div className="vp-contact-layout">
          {/* FORM */}
          <div className="vp-contact-form-card">
            <div className="vp-contact-form-top">
              <span>01 / SEND A MESSAGE</span>
              <span>DIRECT</span>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="vp-contact-form"
            >
              <div className="vp-contact-field">
                <label htmlFor="contact-name">Your name</label>

                <input
                  id="contact-name"
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="vp-contact-field">
                <label htmlFor="contact-email">Email address</label>

                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="vp-contact-field">
                <label htmlFor="contact-message">Tell me about it</label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="I have an interesting project..."
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                className="vp-contact-submit"
                disabled={isSending}
              >
                <span>{isSending ? "Sending..." : "Send message"}</span>

                <span className="vp-contact-submit-icon">
                  {isSending ? "..." : "↗"}
                </span>
              </button>

              {status === "success" && (
                <div className="vp-contact-status success">
                  <span>✓</span>
                  Message sent successfully. I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="vp-contact-status error">
                  <span>!</span>
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* SIDE INFO */}
          <aside className="vp-contact-side">
            <div className="vp-contact-side-item">
              <span className="vp-contact-side-number">02</span>

              <div>
                <span className="vp-contact-side-label">EMAIL</span>

                <a
                  href="mailto:your-email@example.com"
                  className="vp-contact-email"
                >
                  Let's talk
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="vp-contact-side-item">
              <span className="vp-contact-side-number">03</span>

              <div>
                <span className="vp-contact-side-label">LOCATION</span>

                <p>
                  India
                  <br />
                  Available Worldwide
                </p>
              </div>
            </div>

            <div className="vp-contact-side-item">
              <span className="vp-contact-side-number">04</span>

              <div>
                <span className="vp-contact-side-label">SOCIALS</span>

                <div className="vp-contact-socials">
                  <a
                    className="vp-contact-social"
                    href="https://www.linkedin.com/in/vaibhav-panchal12"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>

                  <a
                    className="vp-contact-social"
                    href="https://github.com/vaibhavdkjbdjchv?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>

                  <a
                    className="vp-contact-social"
                    href="https://www.instagram.com/vitt_hal_12/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faSquareInstagram} />
                  </a>

                  <a
                    className="vp-contact-social"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="vp-contact-footer">
          <span>© {new Date().getFullYear()} VAIBHAV PANCHAL</span>
          <span>DESIGNED & DEVELOPED WITH INTENT</span>
        </div>
      </section>
    </main>
  );
};

export default Contact;
