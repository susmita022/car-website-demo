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
              <source src="/videos/baleno.mp4" type="video/mp4" />
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
          <h2>Features</h2>
          <div className="advance-content">
            <div className="image-grid">
              <div className="image-wrapper">
                <img
                  src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/s-cng/baleno/key-highlights/baleno-chasis.webp?la=en&hash=C02128E08FEB6DC460C1E1E2F601261F"
                  alt="Grand Vitara Feature 1"
                />
                <div className="image-overlay">
                  <h3>Factory Fitted S-CNG</h3>
                  <p>
                    Our CNG cylinder is fitted on the new-generation chassis
                    platform using Ultra and Advanced High Tensile Steels that
                    aids the car to resist deformation.
                  </p>
                </div>
              </div>
              <div className="image-wrapper">
                <img
                  src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/suzukiconnect-2.webp?la=en&hash=52C4C9FAE01D1371832666CEFF16F61B"
                  alt="Grand Vitara Feature 2"
                />
                <div className="image-overlay">
                  <h3>Suzuki Connect</h3>
                  <p>
                    Get future-ready and keep a track of real-time updates
                    without breaking a sweat with Suzuki Connect.
                  </p>
                </div>
              </div>
              <div className="image-wrapper">
                <img
                  src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/s-cng/baleno/key-highlights/tilt-telescopic.webp?la=en&hash=F903C8A219F566087A242C876FFA44ED"
                  alt="Grand Vitara Feature 3"
                />
                <div className="image-overlay">
                  <h3>Telescopic Steering</h3>

                  <p>
                    Experience nimble yet refined driving experience with a Tilt
                    and Telescopic steering that lets you adjust the steering as
                    per your convenience.
                  </p>
                </div>
              </div>
              <div className="image-wrapper">
                <img
                  src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-rear-usb-ctype.webp?la=en&hash=9083949AFFD9509FB7F80E8C725AB798"
                  alt="Grand Vitara Feature 4"
                />
                <div className="image-overlay">
                  <h3> Rear USB Type A and Type C Charger</h3>

                  <p>
                    Never run out of charge for your gadgets with the
                    best-in-segment Rear USB Type A and Type C fast charging
                    ports.
                  </p>
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
              Pearl Arctic White
            </button>
            <button
              className={`color-option silver ${
                activeColor === 2 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(2)}
            >
              Splendid Silver
            </button>
            <button
              className={`color-option white ${
                activeColor === 3 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(3)}
            >
              Grandeur Grey
            </button>
            <button
              className={`color-option white ${
                activeColor === 4 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(4)}
            >
              Opulent Red
            </button>
          </div>
          <div className="color-options">
            <button
              className={`color-option blue ${
                activeColor === 5 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(5)}
            >
              Luxe Beige
            </button>
            <button
              className={`color-option bronze ${
                activeColor === 6 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(6)}
            >
              Midnight Black
            </button>
          </div>
          <div
            className={`color-content blue-content ${
              activeColor === 0 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/banner/celestialblue.webp"
              alt="Nexa Blue"
              id="baleno-colour"
            />
          </div>
          <div
            className={`color-content bronze-content ${
              activeColor === 1 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/banner/articwhite.webp"
              alt="Peart Arctic White"
              id="baleno-colour"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 2 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/banner/splendidsilver.webp"
              alt="Splendid Silver"
              id="baleno-colour"
            />
          </div>
          <div
            className={`color-content white-content ${
              activeColor === 3 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/banner/grandeurgrey.webp"
              alt="Grandeur Grey"
              id="baleno-colour"
            />
          </div>

          <div
            className={`color-content silver-content ${
              activeColor === 4 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/banner/opulantred.webp"
              alt="Opulent Red"
              id="baleno-colour"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 5 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/banner/luxebeige.webp"
              alt="Luxe Beige"
              id="baleno-colour"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 6 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/banner/desktop_pearlmidnightblack_810x411-webp.webp"
              alt="Midnight Black"
              id="baleno-colour"
            />
          </div>
        </div>
      </section>

      <section className="ignis-highlights-section">
        <h2>Baleno Highlights</h2>
        <div className="ignis-highlights-container">
          <div className="ignis-highlight">
            <img
              src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/dual.webp?la=en&hash=B6BFEC3BD2400B41C4F2D9D0C6A468F2"
              alt="Auto Gear Shift"
            />
            <h4>HEAD UP DISPLAY</h4>
          </div>
          <div className="ignis-highlight">
            <img
              src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/safety.webp?la=en&hash=8F7177832521904ECC940940492B7103"
              alt=""
            />
            <h4>22.86 CM HD SMARTPLAY PRO+</h4>
          </div>
          <div className="ignis-highlight">
            <img
              src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/transmission.webp?la=en&hash=D8E58E5E31F9AE548ACD25876D2CFFE0"
              alt=""
            />
            <h4>360 VIEW CAMERA</h4>
          </div>
          <div className="ignis-highlight">
            <img
              src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/smart-play.webp?la=en&hash=38D4A98FD2FB61867E6CF821FA894326"
              alt=""
            />
            <h4>NEXT GENERATION SUZUKI CONNECT</h4>
          </div>
          <div className="ignis-highlight">
            <img
              src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/spacious-interior.webp?la=en&hash=2B9C5E68D2EDB8493403D64219789C87"
              alt="17.78 CM Touchscreen Smartplay Studio"
            />
            <h4>6 AIRBAGS</h4>
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
