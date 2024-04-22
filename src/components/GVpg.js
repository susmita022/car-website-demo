import React, { useState } from "react";
import "./GV.css";
import "./Ucards.css";
import UtilityCard from "./UtilityCard";
import SuzukiConnect from "./SuzukiConnect";

const GVpg = () => {
  const [activeColor, setActiveColor] = useState(0);

  const handleColorOptionClick = (index) => {
    setActiveColor(index);
    const colorOptions = document.querySelectorAll(".color-option");
    const colorContents = document.querySelectorAll(".color-content");
    colorOptions.forEach((option) => option.classList.remove("active"));
    colorContents.forEach((content) => content.classList.remove("active"));
    colorOptions[index].classList.add("active");
    colorContents[index].classList.add("active");
  };

  return (
    <div>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-video-container">
            <video autoPlay muted loop className="hero-video">
              <source
                src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/banner/end-shot-grand-vitara_1_2-mp4.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="scroll-down-indicator">
            <span>Scroll Down</span>
          </div>
        </div>
      </section>

      <section className="the-advanced-grand-vitara">
        <div className="container">
          <h2>The Advanced Grand Vitara</h2>
          <div className="advance-content">
            <div className="image-grid">
              <div className="image-wrapper">
                <img
                  src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-persona-variant/gv_811x629-27-ieh.webp"
                  alt="Grand Vitara Feature 1"
                />
                <div className="image-overlay">
                  <h3>6-SPEED AUTOMATIC TRANSMISSION</h3>
                  <p>Rules with utmost comfort</p>
                </div>
              </div>
              <div className="image-wrapper">
                <img
                  src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-persona-variant/02-03_gv_811x629-allgrip-webp.webp"
                  alt="Grand Vitara Feature 2"
                />
                <div className="image-overlay">
                  <h3>STRONG HYBRID TECHNOLOGY</h3>
                  <p>Rules with revolutionary technology</p>
                </div>
              </div>
              <div className="image-wrapper">
                <img
                  src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-persona-variant/02-03_gv_at_811x629-flip-webp.webp"
                  alt="Grand Vitara Feature 3"
                />
                <div className="image-overlay">
                  <h3>5-SPEED MANUAL TRANSMISSION</h3>

                  <p>Rules with a powerful persona</p>
                </div>
              </div>
              <div className="image-wrapper">
                <img
                  src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-persona-variant/gv_811x629-33-mt.webp"
                  alt="Grand Vitara Feature 4"
                />
                <div className="image-overlay">
                  <h3>ALLGRIP</h3>

                  <p>Rules with a firm grip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="color-options-sectionGV">
        <div className="container">
          <h2>Color Options</h2>
          <div className="color-options">
            <button
              className={`color-option blue ${
                activeColor === 0 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(0)}
            >
              Nexa Blue
            </button>
            <button
              className={`color-option bronze ${
                activeColor === 1 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(1)}
            >
              Opulent Red
            </button>
            <button
              className={`color-option silver ${
                activeColor === 2 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(2)}
            >
              Grandeur Grey
            </button>
            <button
              className={`color-option white ${
                activeColor === 3 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(3)}
            >
              Chestnut Brown
            </button>
            <button
              className={`color-option white ${
                activeColor === 4 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(4)}
            >
              Splendid silver
            </button>
          </div>
          <div className="color-options">
            <button
              className={`color-option blue ${
                activeColor === 5 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(5)}
            >
              Pearl Arctic White
            </button>
            <button
              className={`color-option bronze ${
                activeColor === 6 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(6)}
            >
              Pearl Midnight Black
            </button>
            <button
              className={`color-option silver ${
                activeColor === 7 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(7)}
            >
              Arctic white midnight black
            </button>
            <button
              className={`color-option white ${
                activeColor === 8 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(8)}
            >
              Opulent Red Midnight Black
            </button>
            <button
              className={`color-option white ${
                activeColor === 9 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(9)}
            >
              Splendid Silver Midnight Black
            </button>
          </div>
          <div
            className={`color-content blue-content ${
              activeColor === 0 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-color/688x360/nexa_blue.webp"
              alt="Nexa Blue"
            />
          </div>
          <div
            className={`color-content bronze-content ${
              activeColor === 1 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-color/688x360/opulent_red.webp"
              alt="Opulent Red"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 2 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-color/688x360/grandeur_grey.webp"
              alt="Grandeur Grey"
            />
          </div>
          <div
            className={`color-content white-content ${
              activeColor === 3 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-color/688x360/chestnut_brown.webp"
              alt="Chestnut brown"
            />
          </div>

          <div
            className={`color-content silver-content ${
              activeColor === 4 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-color/688x360/splendid_silver.webp"
              alt="Glistering Grey"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 5 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-color/688x360/arctic_white.webp"
              alt="Pearl White"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 6 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-color/688x360/midnight_black.webp"
              alt="Midnight Black"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 7 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-color/688x360/arctic_white_midnight_black.webp"
              alt="Arctic white midnight black"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 8 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-color/688x360/opulent_red_midnight_black.webp"
              alt="Nexa blue with silver roof"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 9 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-color/688x360/splendid_silver_midnight_black.webp"
              alt=" Splendid Silver Midnight Black"
            />
          </div>
        </div>
      </section>

      <SuzukiConnect />

      <section className="Utility-section">
        <div className="container">
          <h2>Want to proceed?</h2>
          <div className="utility">
            <div className="cards__container">
              <div className="cards__wrapper">
                <ul className="cards__items">
                  <UtilityCard
                    src1="images/drive.png"
                    text="BOOK A TEST DRIVE"
                    path="/bookShowroom"
                  />
                  <UtilityCard
                    src1="images/ebook.png"
                    text="E BOOKING"
                    path="/ebook"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GVpg;
