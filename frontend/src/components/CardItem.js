// frontend/src/components/CardItem.js


import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Cars" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <figure>
              <img className="cards__itemm__img" alt="Cars1" src={props.src1} />
            </figure>
            <div className="cards__item__text-container">
              <h5 className="cards__item__text__left">{props.text1}</h5>
              <h5 className="cards__item__text__right">{props.text2}</h5>
            </div>
          </div>
          <div className="buttons">
            <Link to="/">
              <button type="button" className="btn btn--book">
                E-Book Now
              </button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button type="button" className="btn btn--explore">
                Explore
              </button>
            </Link>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
