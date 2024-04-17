import React, { useState, useEffect } from "react";
import "./invicto.css";
import "./Ucards.css";
import UtilityCard from "./UtilityCard";

const Ignispg = () => {
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

  return (
    <div>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-video-container">
            <video autoPlay muted loop className="hero-video">
              <source src="/videos/ignis.mp4" type="video/mp4" />
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
            src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/design/desktop/side.webp?la=en&hash=7B67BD94114C99D30BE239527DD53A00"
            alt="Exterior "
            className="image"
          />
          <img
            src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/design/desktop/spolier.webp?la=en&hash=CE194BB474E172633D38F76BC32B3486https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/design/desktop/chrome-grill.webp?la=en&hash=1C8DFA3F737F3A81AB749C94508374B4"
            alt="Exterior "
            className="image"
          />
          <img
            src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/design/desktop/chrome-grill.webp?la=en&hash=1C8DFA3F737F3A81AB749C94508374B4"
            alt="Exterior"
            className="image"
          />
          <img
            src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/features/slda.webp?la=en&hash=0C1FBD4B5D6078D569D6B50C4A701AFE"
            alt="Interior "
            className="image"
            style={{ display: "none" }}
          />
          <img
            src="https://nexaprod3.azureedge.net/-/media/feature/nexaworldarticle/interior-ignis.webp"
            alt="Interior "
            className="image"
            style={{ display: "none" }}
          />
          <img
            src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/technology/tech.webp"
            alt="Interior"
            className="image"
            style={{ display: "none" }}
          />
        </div>
      </section>

      <section className="ignis-highlights-section">
        <h2>Ignis Highlights</h2>
        <div className="ignis-highlights-container">
          <div className="ignis-highlight">
            <img
              src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/ignis/ags.webp?la=en&hash=BF918CB53EAD17B536D5584301D3FCE9"
              alt="Auto Gear Shift"
            />
            <h4>AUTO GEAR SHIFT</h4>
          </div>
          <div className="ignis-highlight">
            <img
              src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/ignis/interior.webp?la=en&hash=9F6A943A205D2C90E831972A042ADF15"
              alt="Spacious & Comfortable Interiors"
            />
            <h4>SPACIOUS & COMFORTABLE INTERIORS</h4>
          </div>
          <div className="ignis-highlight">
            <img
              src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/ignis/engine.webp?la=en&hash=93D169250BF3957F9AA95655785B09A2"
              alt="Peppy 1.2L VVT Petrol Engine"
            />
            <h4>PEPPY 1.2L VVT PETROL ENGINE</h4>
          </div>
          <div className="ignis-highlight">
            <img
              src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/ignis/drl.webp?la=en&hash=3E8C9C516436FCBA52BB6F5BE693A739"
              alt="LED Projector Headlamps with LED DRLs"
            />
            <h4>LED PROJECTOR HEADLAMPS WITH LED DRLs</h4>
          </div>
          <div className="ignis-highlight">
            <img
              src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/ignis/smartplay.webp?la=en&hash=AE4832BAFBCAF884ACB914DD0EC58005"
              alt="17.78 CM Touchscreen Smartplay Studio"
            />
            <h4>17.78 CM TOUCHSCREEN SMARTPLAY STUDIO</h4>
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
              Lucient Orange
            </button>
            <button
              className={`color-option silver ${
                activeColor === 2 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(2)}
            >
              Silky Silver
            </button>
            <button
              className={`color-option white ${
                activeColor === 3 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(3)}
            >
              Turquoise Blue
            </button>
            <button
              className={`color-option white ${
                activeColor === 4 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(4)}
            >
              Glistening Grey
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
              Lucent Orange With Black Roof
            </button>
            <button
              className={`color-option white ${
                activeColor === 8 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(8)}
            >
              Nexa Blue with silver roof
            </button>
            <button
              className={`color-option white ${
                activeColor === 9 ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(9)}
            >
              Nexa Blue with black roof
            </button>
          </div>
          <div
            className={`color-content blue-content ${
              activeColor === 0 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/brandpage-car-nexa-blue.webp"
              alt="Nexa Blue"
              id="ignisimg"
            />
          </div>
          <div
            className={`color-content bronze-content ${
              activeColor === 1 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/orange.webp"
              alt="Lucient Orange"
              id="ignisimg"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 2 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/silky-silver.webp"
              alt="Silky Silver"
              id="ignisimg"
            />
          </div>
          <div
            className={`color-content white-content ${
              activeColor === 3 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/turquosie-blue.webp"
              alt="Turquoise Blue"
              id="ignisimg"
            />
          </div>

          <div
            className={`color-content silver-content ${
              activeColor === 4 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/glistering-grey.webp"
              alt="Glistering Grey"
              id="ignisimg"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 5 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/pearl-white.webp"
              alt="Pearl White"
              id="ignisimg"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 6 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/pearl-midnight-black.webp"
              alt="Midnight Black"
              id="ignisimg"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 7 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/orange-black.webp"
              alt="Lucent Orange with black roof"
              id="ignisimg"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 8 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/brandpage-car-size--blue-with-silver.webp"
              alt="Nexa blue with silver roof"
              id="ignisimg"
            />
          </div>
          <div
            className={`color-content silver-content ${
              activeColor === 9 ? "active" : ""
            }`}
          >
            <img
              src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/brandpage-car-nexa-blue-with-black-roof.webp"
              alt="Nexa Blue with black roof"
              id="ignisimg"
            />
          </div>
        </div>
      </section>

      <section className="benefits-timeline-section">
        <div className="container">
          <h2 className="benefits-heading">Ignis Safety Features</h2>
          <div className="benefit-timeline">
            <div className="benefit-item">
              <img
                src="https://www.nexaexperience.com/dist/assets/images/safety/ignis/icon21.png"
                alt="Benefit Icon"
                className="safety-icon"
              />
              <h4>Seat Belt Pre-Tensioners with force Limiters</h4>
              <p>
                Pre-tensioners restrain the passengers and Force limiters
                prevent seatbelt-inflicted injury.
              </p>
            </div>
            <div className="benefit-item">
              <img
                src="https://www.nexaexperience.com/dist/assets/images/safety/icon31.png"
                alt="Benefit Icon"
                className="safety-icon"
              />
              <h4>
                Full Frontal impact Compliance, Frontal offset Impact
                Compliance, Side Impact Compliance
              </h4>
              <p>
                Successfully tested and in compliance with international safety
                norms.
              </p>
            </div>
            <div className="benefit-item">
              <img
                src="https://www.nexaexperience.com/dist/assets/images/safety/ignis/icon11.png"
                alt="Benefit Icon"
                className="safety-icon"
              />
              <h3>Suzuki-Tect Body</h3>
              <p>
                Suzuki’s Total Effective Control Technology (TECT) concept
                results in effective absorption and dispersion of crash energy.
                The effective use of high-tensile steel for major parts makes
                the body light, strong and safe.
              </p>
            </div>
            <div className="benefit-item">
              <img
                src="https://www.nexaexperience.com/dist/assets/images/safety/ignis/icon51.png"
                alt="Benefit Icon"
                className="safety-icon"
              />
              <h4>Dual Front Air Bags</h4>
              <p>
                Dual Front Air Bags to take all the impact before it reaches you
                and keeps you safe.
              </p>
            </div>
            <div className="benefit-item">
              <img
                src="https://www.nexaexperience.com/dist/assets/images/safety/ignis/icon61.png"
                alt="Benefit Icon"
                className="safety-icon"
              />
              <h4>ABS with ABD</h4>
              <p>
                Anti-lock Braking System prevents the locking up of the wheels
                when the brakes are applied under heavy loads while EBD ensures
                an efficient and effective braking.
              </p>
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

export default Ignispg;
