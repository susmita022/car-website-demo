import React, { useState, useEffect } from "react";
import "./GV.css";
import "./Ucards.css";
import UtilityCard from "./UtilityCard";

const GVpg = () => {
  const [click, setClick] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // 0 for exterior, 1 for interior
  const [activeColor, setActiveColor] = useState(0);

  const handleClick = () => {
    setClick(!click);
  };

  const showCarouselItem = (index) => {
    const carouselItems = document.querySelectorAll(".image");
    carouselItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };

  const nextCarouselItem = () => {
    let currentIndex = activeTab;
    currentIndex++;
    if (currentIndex >= 6) {
      currentIndex = 0;
    }
    setActiveTab(currentIndex);
    showCarouselItem(currentIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextCarouselItem, 5000);
    return () => clearInterval(interval);
  }, [activeTab]);

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

      <section className="strong-hybrid-section">
        <div className="container">
          <h2>Suzuki Connect</h2>
          <div className="tabs-container">
            <div className="tabs">
              <button
                className={`tab-btn ${activeTab === 0 ? "active" : ""}`}
                data-tab="electric-drive"
                onClick={() => setActiveTab(0)}
                id="connect-btn"
              >
                Smartwatch Connectivity
              </button>
              <button
                className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
                data-tab="hybrid-drive"
                onClick={() => setActiveTab(1)}
                id="connect-btn"
              >
                Remote Operations
              </button>
              <button
                className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
                data-tab="engine-drive"
                onClick={() => setActiveTab(2)}
                id="connect-btn"
              >
                Suzuki Connect for Alexa
              </button>
              <button
                className={`tab-btn ${activeTab === 3 ? "active" : ""}`}
                data-tab="regenerative-braking"
                onClick={() => setActiveTab(3)}
                id="connect-btn"
              >
                Vehicle tracking
              </button>

              <button
                className={`tab-btn ${activeTab === 4 ? "active" : ""}`}
                data-tab="regenerative-braking"
                onClick={() => setActiveTab(4)}
                id="connect-btn"
              >
                Safety and Security Alerts
              </button>
            </div>
            <div className="tab-content">
              <div
                className={`tab-pane ${activeTab === 0 ? "active" : ""}`}
                id="electric-drive"
              >
                <div className="video-container">
                  <img
                    src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/nexawebsitesuzukiconnect/grand-vitara/gvsconnectsmartwatch.jpg"
                    alt="smartwatch"
                  />
                </div>
                <div className="content">
                  <h3>Smartwatch Connectivity</h3>
                  <p>
                    Experience seamless connectivity through your Smartwatch,
                    truly enabling you to be closer to your car. It’s as
                    convenient as it gets. Available to users on Android and
                    iOS.
                  </p>
                </div>
              </div>
              <div
                className={`tab-pane ${activeTab === 1 ? "active" : ""}`}
                id="hybrid-drive"
              >
                <div className="video-container">
                  <img
                    src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/nexawebsitesuzukiconnect/grand-vitara/gvsuzuki-connect-remoteoperation.jpg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h4>REMOTE OPERATIONS</h4>
                  <p>
                    Experience remote connectivity with your car when you are
                    away from it.
                  </p>
                  <h4>REMOTE IMMOBILIZER REQUEST</h4>
                  <p>
                    In case of a break-in, remotely prohibit the engine restart,
                    restricting any further movement.
                  </p>
                  <h4>REMOTE HAZARD</h4>
                  <p>
                    Easily locate your Maruti Suzuki vehicle in a crowded
                    parking space without facing any difficulty.
                  </p>
                </div>
              </div>
              <div
                className={`tab-pane ${activeTab === 2 ? "active" : ""}`}
                id="engine-drive"
              >
                <div className="video-container">
                  <img
                    src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/nexawebsitesuzukiconnect/grand-vitara/gv-tab3-webp.webp"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h3> Suzuki Connect Skill for Amazon Alexa</h3>
                  <p>
                    Access your Maruti Suzuki vehicle remotely using your voice
                    with Suzuki Connect skill for Amazon Alexa. <br /> With
                    Suzuki Connect, get the location of your Maruti Suzuki
                    vehicle through voice commands and Odometer information
                    using supported Alexa-enabled devices.
                  </p>
                </div>
              </div>
              <div
                className={`tab-pane ${activeTab === 3 ? "active" : ""}`}
                id="regenerative-braking"
              >
                <div className="video-container">
                  <img
                    src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/nexawebsitesuzukiconnect/grand-vitara/gv-tab4-webp.webp"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h3>Vehicle Tracking</h3>
                  <p>
                    Suzuki Connect allows you to stay informed and trouble-free
                    by enabling location tracking and get real-time status of
                    vehicle movement. <br />
                    Share live car location with your family and friends
                    allowing them to track your car’s movement and current
                    location.
                  </p>
                </div>
              </div>

              <div
                className={`tab-pane ${activeTab === 4 ? "active" : ""}`}
                id="regenerative-braking"
              >
                <div className="video-container">
                  <img
                    src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/nexawebsitesuzukiconnect/grand-vitara/gv-tab5-webp.webp"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h3>Safety and Security Alerts</h3>
                  <p>
                    Suzuki Connect sends you an array of alerts to make sure you
                    are always at peace when it comes to the safety and security
                    of your loved ones. <br />
                    <h4>Airbag Alert</h4>
                    In the event of airbags being deployed, registered emergency
                    contacts will be notified through SMS and Email. <br />
                    <h4>Tow Away Alert</h4>
                    In case your vehicle is towed away, an alert will be sent to
                    your phone and your emergency contact. Screen reader support
                    enabled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
