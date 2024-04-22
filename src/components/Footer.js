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
            <Link to="/invicto" onClick={handleClick}>
              Invicto
            </Link>
            <Link to="/" onClick={handleClick}>
              Fronx
            </Link>
            <Link to="/jimny" onClick={handleClick}>
              Jimny
            </Link>
            <Link to="/Baleno" onClick={handleClick}>
              Baleno
            </Link>
            <Link to="/gv" onClick={handleClick}>
              Grand Vitara
            </Link>
            <Link to="/ignis" onClick={handleClick}>
              Ignis
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items"></div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>FOLLOW US</h2>
            <div class="social-icons">
              <a
                href="https://www.facebook.com/nexaexperience/"
                className="social-icon-link facebook"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/NEXAexperience/"
                className="social-icon-link instagram"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCB0CqBMH0bpv5nLXiiJbUJA"
                className="social-icon-link youtube"
                target="_blank"
                aria-label="Youtube"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://twitter.com/NEXAExperience"
                className="social-icon-link twitter"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/maruti-udyog-limited?originalSubdomain=in"
                className="social-icon-link linkedin"
                target="_blank"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
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
