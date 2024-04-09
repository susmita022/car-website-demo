import React from "react";

function YoutubeCard(props) {
  return (
    <>
      <li className="cards__item">
        <card className="card-social">
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
              {props.content} <span className="hashtag">{props.hashtag2}</span>
            </p>
          </div>
        </card>
      </li>
    </>
  );
}

export default YoutubeCard;
