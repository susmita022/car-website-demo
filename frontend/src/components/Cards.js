import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>MARUTI CARS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/fronx.jpg"
              src1="images/fronxlogo.webp"
              text1="5 passengers"
              text2="Auto"
              label=" 751500 INR"
              path="/ebook"
              explorePath="/ebook"
            />
            <CardItem
              src="images/invicto.webp"
              src1="images/invictologo.webp"
              text1="5 passengers"
              text2="Auto"
              label="2521000 INR"
              path="/invicto"
              explorePath="/invicto"
            />
            <CardItem
              src="images/jimny.jpg"
              src1="images/jimnylogo.jpg"
              text1="5 passengers"
              text2="Auto"
              label="1227200 INR "
              path="/services"
              explorePath="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/baleno.jpg"
              src1="images/balenologo.webp"
              text1="5 passengers"
              text2="Auto"
              label="666000 INR"
              path="/Baleno"
              explorePath="/Baleno"
            />
            <CardItem
              src="images/grandvitara.webp"
              src1="images/grandvitaralogo.webp"
              text1="5 passengers"
              text2="Auto"
              label="1080000 INR"
              path="/GV"
              explorePath="/GV"
            />
            <CardItem
              src="images/ignis.jpg"
              src1="images/ignislogo.webp"
              text1="5 passengers"
              text2="Auto"
              label="584000 INR"
              path="/ignis"
              explorePath="/ignis"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
