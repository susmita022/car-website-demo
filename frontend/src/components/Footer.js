import React, { useState } from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe to receive our best offers and deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>CORPORATE</h2>
            <Link to="/contactUs" onClick={handleClick}>
              Contact Us
            </Link>
            <a
              href="https://www.nexaexperience.com/media"
              target="_blank"
              rel="noopener noreferrer"
            >
              Media
            </a>
            <a
              href="https://www.nexaexperience.com/important-information-for-customer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Important Customer information
            </a>
            <a
              href="https://www.nexaexperience.com/contact-feedback"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feedback
            </a>
            <a
              href="https://www.nexaexperience.com/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
          </div>
          <div class="footer-link-items">
            <h2>CARS</h2>
            <Link to="/">Invicto</Link>
            <Link to="/">Fronx</Link>
            <Link to="/">Jimny</Link>
            <Link to="/">Baleno</Link>
            <Link to="/">Grand Vitara</Link>
            <Link to="/">Ignis</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items"></div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>FOLLOW US</h2>
            <div class="social-icons">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link linkedin"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights"></small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
