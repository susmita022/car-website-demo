import React, { useState, useEffect } from "react";

function SuzukiConnect() {
  const [activeTab, setActiveTab] = useState(0);

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
  });
  return (
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
                  convenient as it gets. Available to users on Android and iOS.
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
                  Experience remote connectivity with your car when you are away
                  from it.
                </p>
                <h4>REMOTE IMMOBILIZER REQUEST</h4>
                <p>
                  In case of a break-in, remotely prohibit the engine restart,
                  restricting any further movement.
                </p>
                <h4>REMOTE HAZARD</h4>
                <p>
                  Easily locate your Maruti Suzuki vehicle in a crowded parking
                  space without facing any difficulty.
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
                  with Suzuki Connect skill for Amazon Alexa. <br /> With Suzuki
                  Connect, get the location of your Maruti Suzuki vehicle
                  through voice commands and Odometer information using
                  supported Alexa-enabled devices.
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
                  Suzuki Connect allows you to stay informed and trouble-free by
                  enabling location tracking and get real-time status of vehicle
                  movement. <br />
                  Share live car location with your family and friends allowing
                  them to track your car’s movement and current location.
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
  );
}

export default SuzukiConnect;
