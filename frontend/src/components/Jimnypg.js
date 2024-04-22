import React, { useState } from "react";
import "./GV.css";
import "./Ucards.css";
import SuzukiConnect from "./SuzukiConnect";
import UtilityCard from "./UtilityCard";

const Jimnypg = () => {
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
                src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/banner/jimny-1.mp4"
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
          <br />
          <h2>Safety</h2>

          <div className="advance-content">
            <div className="image-grid">
              <div className="image-wrapper">
                <img
                  src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/brand-safety/811x629-ar_sn_jimny_hill-descent-control-shot_v1-copy.webp"
                  alt=""
                />
                <div className="image-overlay">
                  <h3>HILL HOLD ASSIST</h3>
                  <p>Climb like a mountain goat on the steepest roads</p>
                </div>
              </div>
              <div className="image-wrapper">
                <img
                  src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/brand-safety/811x629-ar_sn_jimny_hill-descent-control-shot_v1.webp"
                  alt=""
                />
                <div className="image-overlay">
                  <h3>HILL DESCENT CONTROL</h3>
                  <p>Take control with the push of a button</p>
                </div>
              </div>
              <div className="image-wrapper">
                <img
                  src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/brand-safety/jimmy-811x629-1.webp"
                  alt=""
                />
                <div className="image-overlay">
                  <h3>BRAKE LSD</h3>

                  <p>Be the unstoppable force on most stubborn terrain.</p>
                </div>
              </div>
              <div className="image-wrapper">
                <img
                  src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/brand-safety/811x629-ar_ab_bp_jimny_6_airbag_shot_03_04.webp"
                  alt=""
                />
                <div className="image-overlay">
                  <h3>6 AIRBAGS</h3>

                  <p>
                    The thrill of the ride is only possible with safety on your
                    side
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="color-options-section">
        <div className="container">
          <h2>Color Options</h2>
          <div className="color-options">
            <button
              className={`color-option blue ${
                activeColor === 0 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(0)}
            >
              Kinetic Yellow with bluish black roof
            </button>
            <button
              className={`color-option bronze ${
                activeColor === 1 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(1)}
            >
              Sizzling Red with bluish black roof
            </button>
            <button
              className={`color-option silver ${
                activeColor === 2 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(2)}
            >
              Nexa Blue
            </button>
            <button
              className={`color-option white ${
                activeColor === 3 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(3)}
            >
              Bluish Black
            </button>
          </div>
          <div className="color-options">
            <button
              className={`color-option blue ${
                activeColor === 4 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(4)}
            >
              Sizzling Red
            </button>
            <button
              className={`color-option bronze ${
                activeColor === 5 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(5)}
            >
              Granite Grey
            </button>
            <button
              className={`color-option silver ${
                activeColor === 6 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(6)}
            >
              Pearl Arctic white
            </button>
          </div>
          <div
            className={`color-content blue-content ${
              activeColor === 0 ? "active" : ""
            }`}
          >
            <img src="/images/j01.png" alt="" />
          </div>
          <div
            className={`color-content bronze-content ${
              activeColor === 1 ? "active" : ""
            }`}
          >
            <img src="/images/j02.png" alt="Opulent Red" />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 2 ? "active" : ""
            }`}
          >
            <img src="/images/j03.png" alt="" />
          </div>
          <div
            className={`color-content white-content ${
              activeColor === 3 ? "active" : ""
            }`}
          >
            <img src="/images/j04.png" alt="" />
          </div>

          <div
            className={`color-content silver-content ${
              activeColor === 4 ? "active" : ""
            }`}
          >
            <img src="/images/j05.png" alt="Glistering Grey" />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 5 ? "active" : ""
            }`}
          >
            <img src="/images/j06.png" alt="Pearl White" />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 6 ? "active" : ""
            }`}
          >
            <img src="/images/j07.png" alt="Midnight Black" />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 7 ? "active" : ""
            }`}
          >
            <img src="/images/j06.png" alt="Arctic white midnight black" />
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

export default Jimnypg;
