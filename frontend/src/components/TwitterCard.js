// frontend/src/components/TwitterCard.js


import React from "react";

function TwitterCard(props) {
  return (
    <>
      <li className="cards__item">
        <div className="card-social">
          <a href={props.href} className="card-link">
            <div className="card-heading">
              <img src={props.src} alt="symbol" className="cards__itemm__img" />
              <div>
                {" "}
                <h3>{props.heading}</h3>
                <p className="hashtag">{props.hashtag}</p>
              </div>
            </div>
            <div className="card-content">
              <p>
                {props.content} <br />
                <span className="hashtag">{props.hashtag2}</span>
              </p>
            </div>
          </a>
        </div>
      </li>
    </>
  );
}

export default TwitterCard;
