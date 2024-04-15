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
            alt="Exterior Image"
            className="image"
          />
          <img
            src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/design/desktop/spolier.webp?la=en&hash=CE194BB474E172633D38F76BC32B3486https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/design/desktop/chrome-grill.webp?la=en&hash=1C8DFA3F737F3A81AB749C94508374B4"
            alt="Exterior Image"
            className="image"
          />
          <img
            src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/design/desktop/chrome-grill.webp?la=en&hash=1C8DFA3F737F3A81AB749C94508374B4"
            alt="Exterior Image"
            className="image"
          />
          <img
            src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/features/slda.webp?la=en&hash=0C1FBD4B5D6078D569D6B50C4A701AFE"
            alt="Interior Image"
            className="image"
            style={{ display: "none" }}
          />
          <img
            src="https://nexaprod3.azureedge.net/-/media/feature/nexaworldarticle/interior-ignis.webp"
            alt="Interior Image"
            className="image"
            style={{ display: "none" }}
          />
          <img
            src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/technology/tech.webp"
            alt="Interior Image"
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

      <section className="ignis-safety-section">
        <h2>Safety Features</h2>
        <div className="ignis-safety-container">
          <div className="safety-feature">
            <img
              src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/ignis/abs.webp?la=en&hash=85A5464F6E36CF012BD8EF81BFA67F98"
              alt="ABS with EBD"
            />
            <h4>ABS WITH EBD</h4>
          </div>
          <div className="safety-feature">
            <img
              src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/ignis/airbags.webp?la=en&hash=68176D6B4748E85C1170A9AC3F99D26E"
              alt="Airbags"
            />
            <h4>AIRBAGS</h4>
          </div>
          <div className="safety-feature">
            <img
              src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/ignis/hsla.webp?la=en&hash=8A2FB504FBF9E56B26021E3A0D003581"
              alt="High Strength Steel Frame"
            />
            <h4>HIGH STRENGTH STEEL FRAME</h4>
          </div>
          <div className="safety-feature">
            <img
              src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/ignis/rpas.webp?la=en&hash=67921414A4BFBF06828C53C8745B5900"
              alt="Reverse Parking Assist"
            />
            <h4>REVERSE PARKING ASSIST</h4>
          </div>
          <div className="safety-feature">
            <img
              src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitebrandpagehighlights/ignis/isofix.webp?la=en&hash=DEFDB006D6C39B198CB77CA898853EDD"
              alt="Child Seat Anchors"
            />
            <h4>CHILD SEAT ANCHORS</h4>
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

export default Ignispg;
