import React from "react";

function TwitterCard(props) {
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
            <p>
              {props.content} <br />
              <span className="hashtag">{props.hashtag2}</span>
            </p>
          </div>
        </card>
      </li>
    </>
  );
}

export default TwitterCard;
