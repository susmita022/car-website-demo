// frontend/src/components/YoutubeCard.js


import React from "react";

function YoutubeCard(props) {
  return (
    <>
      <li className="cards__item">
        <card className="card-social">
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
              <div className="banner">
                <img src={props.link} alt="symbol" className="cards_banner" />
              </div>
              <p>
                {props.content}{" "}
                <span className="hashtag">{props.hashtag2}</span>
              </p>
            </div>
          </a>
        </card>
      </li>
    </>
  );
}

export default YoutubeCard;
