// frontend/src/components/Ebooking.js


import React, { useState } from "react";
import "./Ebooking.css";

const Ebooking = () => {
  const [name, setName] = useState("");
  const [dealership, setDealership] = useState("");
  const [dealershipAddress, setDealershipAddress] = useState("");
  const [model, setModel] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [imageClass, setImageClass] = useState("");

  const modelImages = {
    Fronx: [
      "/images/fronx.jpg",
      "/images/fronx1.jpg",
      "/images/fronx2.jpg",
      "/images/fronx3.jpg",
    ],
    Invicto: [
      "/images/invicto.webp",
      "/images/invicto2.webp",
      "/images/invicto3.jpg",
      "/images/invicto1.webp",
    ],
    Baleno: [
      "/images/Baleno1.jpg",
      "/images/Baleno2.jpg",
      "/images/Baleno3.jpg",
      "/images/Baleno4.png",
    ],
    Jimny: [
      "/images/jimny.jpg",
      "/images/jimny2.jpg",
      "/images/jimny3.jpg",
      "/images/jimny4.jpg",
    ],
    "Grand Vitara": [
      "/images/grandvitara.webp",
      "/images/gv1.jpg",
      "/images/gv2.webp",
      "/images/gv3.jpg",
    ],
    Ignis: [
      "/images/IGNIS.jpg",
      "/images/IGNIS.webp",
      "/images/IGNIS1.webp",
      "/images/IGNIS2.webp",
    ],
    // Add more models with their image URLs
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDealershipChange = (e) => {
    const selectedDealership = e.target.value;
    setDealership(selectedDealership);

    switch (selectedDealership) {
      case "Rana Motors":
        setDealershipAddress(
          "Plot No 107–108 NH-8, near Rajiv Chowk, Shanti Nagar, Gurugram, Haryana 122001"
        );
        break;
      case "Prem Motors":
        setDealershipAddress(
          "Plot No. 6, IDC, Sector-16, Opposite Sector-14, Gurgaon,Haryana - 122002"
        );
        break;
      case "TR Sawhney":
        setDealershipAddress(
          "SCO 1&2, near Bikanerwala, Sector 29, Gurugram, Haryana 122009"
        );
        break;
      case "Vipul Motors":
        setDealershipAddress(
          "Plot No 504, Phase III, Udyog Vihar, Sector 20, Gurugram, Haryana 122001"
        );
        break;
      case "Pasco Automobiles":
        setDealershipAddress(
          "Shop No. 24, 25, 26 Platina Tower Opposite Bristol Hotel Sikenderpur, Haryana 122004"
        );
        break;
      default:
        setDealershipAddress("");
    }
  };

  const handleModelChange = (e) => {
    const selectedModel = e.target.value;
    setModel(selectedModel);
    // Reset image index and image class when model changes
    setImageIndex(0);
    setImageClass("");
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % modelImages[model].length;
      setImageClass("slide-left");
      setTimeout(() => {
        setImageClass("");
      }, 500);
      return nextIndex;
    });
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => {
      const nextIndex =
        prevIndex === 0 ? modelImages[model].length - 1 : prevIndex - 1;
      setImageClass("slide-right");
      setTimeout(() => {
        setImageClass("");
      }, 500);
      return nextIndex;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      name,
      dealership,
      dealershipAddress,
      model,
    });
  };

  return (
    <div className="ebooking-container">
      <div className="model-container">
        <h1 className="section-title">SELECT YOUR MODEL</h1>
        <div className="form-group">
          <label htmlFor="model" className="form-label">
            Car Model:
          </label>
          <select
            id="model"
            value={model}
            onChange={handleModelChange}
            className="form-select"
          >
            <option value="">Select a car model</option>
            <option value="Fronx">Fronx</option>
            <option value="Invicto">Invicto</option>
            <option value="Baleno">Baleno</option>
            <option value="Jimny">Jimny</option>
            <option value="Grand Vitara">Grand Vitara</option>
            <option value="Ignis">Ignis</option>
          </select>
        </div>
        {model && (
          <div className="image-container">
            <div className="prev-arrow" onClick={handlePrevImage}>
              <img src="/images/left.png" alt="prev" />
            </div>
            <img
              src={modelImages[model][imageIndex]}
              alt={model}
              className={`car-image ${imageClass}`}
            />
            <div className="next-arrow" onClick={handleNextImage}>
              <img src="/images/right.png" alt="next" />
            </div>
          </div>
        )}
      </div>
      <div className="vertical-line"></div>
      <div className="form-container">
        <h1 className="section-title">FILL YOUR DETAILS</h1>
        <div className="form-box">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dealership" className="form-label">
                Choose Dealership:
              </label>
              <select
                id="dealership"
                value={dealership}
                onChange={handleDealershipChange}
                className="form-select"
              >
                <option value="">Select a dealership</option>
                <option value="Rana Motors">Rana Motors</option>
                <option value="Prem Motors">Prem Motors</option>
                <option value="TR Sawhney">TR Sawhney</option>
                <option value="Vipul Motors">Vipul Motors</option>
                <option value="Pasco Automobiles">Pasco Automobiles</option>
              </select>
            </div>
            {dealershipAddress && (
              <div className="form-group">
                <label htmlFor="dealership-address" className="form-label">
                  Dealership Address:
                </label>
                <div id="dealership-address" className="dealership-address">
                  {dealershipAddress}
                </div>
              </div>
            )}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ebooking;
