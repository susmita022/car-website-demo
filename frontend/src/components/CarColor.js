import React, { useState } from "react";

const CarColor = ({ colorOptions }) => {
  const [activeColor, setActiveColor] = useState(0);

  const handleColorOptionClick = (index) => {
    setActiveColor(index);
  };

  return (
    <section className="color-options-section">
      <div className="container">
        <h2>Color Options</h2>
        <div className="color-options">
          {colorOptions.map((color, index) => (
            <button
              key={index}
              className={`color-option ${color.className} ${
                activeColor === index ? "active" : ""
              }`}
              onClick={() => handleColorOptionClick(index)}
            >
              {color.label}
            </button>
          ))}
        </div>
        {colorOptions.map((color, index) => (
          <div
            key={index}
            className={`color-content ${color.className}-content ${
              activeColor === index ? "active" : ""
            }`}
          >
            <img src={color.image} alt={color.label} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarColor;
