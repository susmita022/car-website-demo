import React from "react";
import "./Ucards.css";
import Call from "./Call";
import UtilityCard from "./UtilityCard";

function Utilities() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <UtilityCard
              src1="images/loc.png"
              text="LOCATE A DEALER"
              path="/services"
            />
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
            <Call src1="images/call.png" text="CALL A SALES EXECUTIVE" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Utilities;