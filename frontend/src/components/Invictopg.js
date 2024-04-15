import React, { useState, useEffect } from "react";
import "./invicto.css";
import "./Ucards.css";
import UtilityCard from "./UtilityCard";

const Invictopg = () => {
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

  const handleExteriorTabClick = (e) => {
    e.preventDefault();
    setActiveTab(0);
    const exteriorImages = document.querySelectorAll(
      ".image:nth-of-type(-n+3)"
    );
    const interiorImages = document.querySelectorAll(".image:nth-of-type(n+4)");
    exteriorImages.forEach((img) => (img.style.display = "block"));
    interiorImages.forEach((img) => (img.style.display = "none"));
    document.getElementById("exterior-tab").classList.add("active");
    document.getElementById("interior-tab").classList.remove("active");
  };

  const handleInteriorTabClick = (e) => {
    e.preventDefault();
    setActiveTab(1);
    const exteriorImages = document.querySelectorAll(
      ".image:nth-of-type(-n+3)"
    );
    const interiorImages = document.querySelectorAll(".image:nth-of-type(n+4)");
    exteriorImages.forEach((img) => (img.style.display = "none"));
    interiorImages.forEach((img) => (img.style.display = "block"));
    document.getElementById("interior-tab").classList.add("active");
    document.getElementById("exterior-tab").classList.remove("active");
  };

  const handleColorOptionClick = (index) => {
    setActiveColor(index);
    const colorOptions = document.querySelectorAll(".color-option");
    const colorContents = document.querySelectorAll(".color-content");
    colorOptions.forEach((option) => option.classList.remove("active"));
    colorContents.forEach((content) => content.classList.remove("active"));
    colorOptions[index].classList.add("active");
    colorContents[index].classList.add("active");
  };

  const handleCtaButtonClick = (e, url) => {
    e.preventDefault();
    window.location.href = url;
  };

  return (
    <div>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-video-container">
            <video autoPlay muted loop className="hero-video">
              <source
                src="https://nexastorage.azureedge.net/nexastorage/invictoBannerVideo.mp4"
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

      <section className="discover-opulence-header">
        <h1>Discover Opulence</h1>
        <nav className="exterior-interior-tabs">
          <div className="tab-wrapper">
            <a
              href="#"
              className={`tab ${activeTab === 0 ? "active" : ""}`}
              id="exterior-tab"
              onClick={handleExteriorTabClick}
            >
              Exterior
            </a>
            <a
              href="#"
              className={`tab ${activeTab === 1 ? "active" : ""}`}
              id="interior-tab"
              onClick={handleInteriorTabClick}
            >
              Interior
            </a>
            <div className="switch"></div>
          </div>
        </nav>
        <div className="image-container" id="image-container">
          <img
            src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/discoveropulence/extr-img-2-jpg.webp"
            alt="Exterior Image"
            className="image"
          />
          <img
            src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/discoveropulence/extr-img-3-jpg.webp"
            alt="Exterior Image"
            className="image"
          />
          <img
            src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/discoveropulence/extr-img-5-webp.webp"
            alt="Exterior Image"
            className="image"
          />
          <img
            src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/discoveropulence/int-img-8-webp.webp"
            alt="Interior Image"
            className="image"
            style={{ display: "none" }}
          />
          <img
            src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/discoveropulence/intr-img-3-jpg.webp"
            alt="Interior Image"
            className="image"
            style={{ display: "none" }}
          />
          <img
            src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/discoveropulence/intr-img-2-jpg.webp"
            alt="Interior Image"
            className="image"
            style={{ display: "none" }}
          />
        </div>
        <video
          src="https://nexastorage.azureedge.net/nexastorage/hypbride-engine-animation.mp4"
          autoPlay
          loop
          muted
        ></video>
      </section>

      <section className="benefits-timeline-section">
        <div className="container">
          <h2 className="benefits-heading">Features and Benefits</h2>
          <div className="benefit-timeline">
            <div className="benefit-item">
              <img
                src="//nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/technologybenefits/benifit-icon1-png.png"
                alt="Benefit Icon"
              />
              <h3>Better Fuel Efficiency</h3>
              <p>
                The Hybrid System consumes less fuel and maximizes fuel
                efficiency.
              </p>
            </div>
            <div className="benefit-item">
              <img
                src="//nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/technologybenefits/benifit-icon2-png.png"
                alt="Benefit Icon"
              />
              <h3>Lower CO2 Emissions</h3>
              <p>
                When the electric motor kicks in, the overall load on the petrol
                engine reduces, which leads to lower CO2 emissions and a more
                environment-friendly drive.
              </p>
            </div>
            <div className="benefit-item">
              <img
                src="//nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/technologybenefits/benifit-icon3-png.png"
                alt="Benefit Icon"
              />
              <h3>No Range Anxiety</h3>
              <p>
                The battery charges during cruising and regenerative braking.
                This gives you an extended range as compared to an electric
                vehicle that needs charging at regular intervals.
              </p>
            </div>
            <div className="benefit-item">
              <img
                src="//nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/technologybenefits/benifit-icon4-png.png"
                alt="Benefit Icon"
              />
              <h3>Enhanced Performance</h3>
              <p>
                Enhanced power delivery from the combined output of the petrol
                engine and electric motor delivers smooth and quick
                acceleration.
              </p>
            </div>
            <div className="benefit-item">
              <img
                src="//nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/technologybenefits/benifit-icon5-png.png"
                alt="Benefit Icon"
              />
              <h3>Quieter Driving</h3>
              <p>
                Minimal engine noise in the EV mode and a smooth switch over
                between petrol and electric will give you a smooth and quiet
                driving experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="color-options-section">
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
              Stellar Bronze
            </button>
            <button
              className={`color-option silver ${
                activeColor === 2 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(2)}
            >
              Majestic Silver
            </button>
            <button
              className={`color-option white ${
                activeColor === 3 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(3)}
            >
              Mystic White
            </button>
          </div>
          <div
            className={`color-content blue-content ${
              activeColor === 0 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/brandcolor/blue_810-x-411.webp"
              alt="Nexa Blue"
            />
            <p>
              <b>
                Nexa Blue is a vibrant and eye-catching color that adds a sense
                of style and sophistication to your vehicle.
              </b>
            </p>
          </div>
          <div
            className={`color-content bronze-content ${
              activeColor === 1 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/brandcolor/avant_grade_bronze_810-x-411-webp.webp"
              alt="Stellar Bronze"
            />
            <p>
              <b>
                Stellar Bronze gives your vehicle a luxurious and elegant
                appearance, perfect for making a statement on the road.
              </b>
            </p>
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 2 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/brandcolor/majestic_silver_810-x-411-webp.webp"
              alt="Majestic Silver"
            />
            <p>
              <b>
                Majestic Silver exudes sophistication and modernity, offering a
                sleek and timeless look for your vehicle.
              </b>
            </p>
          </div>
          <div
            className={`color-content white-content ${
              activeColor === 3 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/brandcolor/platinum_white_810-x-411-webp.webp"
              alt="Mystic White"
            />
            <p>
              <b>
                Mystic White provides a clean and crisp appearance, enhancing
                the overall elegance of your vehicle.
              </b>
            </p>
          </div>
        </div>
      </section>

      <section className="strong-hybrid-section">
        <div className="container">
          <h2>Strong Hybrid Technology</h2>
          <div className="tabs-container">
            <div className="tabs">
              <button
                className={`tab-btn ${activeTab === 0 ? "active" : ""}`}
                data-tab="electric-drive"
                onClick={() => setActiveTab(0)}
              >
                Electric Drive
              </button>
              <button
                className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
                data-tab="hybrid-drive"
                onClick={() => setActiveTab(1)}
              >
                Hybrid Drive
              </button>
              <button
                className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
                data-tab="engine-drive"
                onClick={() => setActiveTab(2)}
              >
                Engine Drive
              </button>
              <button
                className={`tab-btn ${activeTab === 3 ? "active" : ""}`}
                data-tab="regenerative-braking"
                onClick={() => setActiveTab(3)}
              >
                Regenerative Braking
              </button>
            </div>
            <div className="tab-content">
              <div
                className={`tab-pane ${activeTab === 0 ? "active" : ""}`}
                id="electric-drive"
              >
                <div className="video-container">
                  <video autoPlay muted loop className="hero-video">
                    <source
                      src="https://nexastorage.azureedge.net/nexastorage/hypbride-engine-animation.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="content">
                  <h3>Electric Drive</h3>
                  <p>
                    For low speed cruising, the energy stored in the battery
                    pack is utilized to power the electric motor. A truly
                    Electric Drive that provides you with immediate
                    acceleration.
                  </p>
                </div>
              </div>
              <div
                className={`tab-pane ${activeTab === 1 ? "active" : ""}`}
                id="hybrid-drive"
              >
                <div className="video-container">
                  <video autoPlay muted loop className="hero-video">
                    <source
                      src="https://nexastorage.azureedge.net/nexastorage/hypbride-engine-animation.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="content">
                  <h3>Hybrid Drive</h3>
                  <p>
                    Gives you optimum performance and spontaneous acceleration
                    using the power of both the petrol engine and the battery
                    pack. The combined power output provides a powerful driving
                    experience.
                  </p>
                </div>
              </div>
              <div
                className={`tab-pane ${activeTab === 2 ? "active" : ""}`}
                id="engine-drive"
              >
                <div className="video-container">
                  <video autoPlay muted loop className="hero-video">
                    <source
                      src="https://nexastorage.azureedge.net/nexastorage/hypbride-engine-animation.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="content">
                  <h3>Engine Drive</h3>
                  <p>
                    An engine drive leverages the IC engine to help you cruise
                    through your journeys while also charging the battery at the
                    same time.
                  </p>
                </div>
              </div>
              <div
                className={`tab-pane ${activeTab === 3 ? "active" : ""}`}
                id="regenerative-braking"
              >
                <div className="video-container">
                  <video autoPlay muted loop className="hero-video">
                    <source
                      src="https://nexastorage.azureedge.net/nexastorage/hypbride-engine-animation.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="content">
                  <h3>Regenerative Braking</h3>
                  <p>
                    A smart solution that maximizes energy efficiency by
                    leveraging regenerative braking to recharge the Li-ion
                    battery.
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

export default Invictopg;
