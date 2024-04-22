import React from "react";
import "./GV.css";
import "./Ucards.css";
import SuzukiConnect from "./SuzukiConnect";
import CarColor from "./CarColor";
import UtilityCard from "./UtilityCard";

const Jimnypg = () => {
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

      <CarColor
        colorOptions={[
          {
            label: "Kinetic Yellow with bluish black roof",
            className: "blue",
            image: "/images/j01.png",
          },
          {
            label: "Sizzling Red with bluish black roof",
            className: "bronze",
            image: "/images/j02.png",
          },
          {
            label: "Nexa Blue",
            className: "bronze",
            image: "/images/j03.png",
          },
          {
            label: "Bluish Black",
            className: "bronze",
            image: "/images/j04.png",
          },
          {
            label: "Sizzling Red",
            className: "bronze",
            image: "/images/j05.png",
          },
          {
            label: "Granite Grey",
            className: "bronze",
            image: "/images/j06.png",
          },
          {
            label: "Pearl Arctic white",
            className: "bronze",
            image: "/images/j07.png",
          },
          // Add more color options as needed
        ]}
      />

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
