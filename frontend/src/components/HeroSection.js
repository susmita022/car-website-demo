// frontend/src/components/HeroSection.js


import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/banner.mp4" autoPlay loop muted />
      <div className="hero-btns">
        <Link to="/services">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
