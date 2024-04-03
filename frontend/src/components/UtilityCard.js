import React from "react";
import { Link } from "react-router-dom";

function UtilityCard(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <div className="cards__item__info">
            <figure>
              {" "}
              <center>
                <img
                  className="cards__itemm__img"
                  alt="Cars1"
                  src={props.src1}
                />
              </center>
            </figure>
            <div className="cards__item__text-container">
              <h5 className="cards__item__text">{props.text}</h5>
            </div>
          </div>
        </Link>
        <hr
          style={{
            background: "#000000",
            color: "#000000",
            borderColor: "#000000",
            height: "3px",
          }}
        />
      </li>
    </>
  );
}

export default UtilityCard;
