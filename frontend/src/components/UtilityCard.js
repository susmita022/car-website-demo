import React, { useState } from "react";
import { Link } from "react-router-dom";

function UtilityCard(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <>
      <li className="cards__item">
        <Link
          className="cards__item__link"
          to={props.path}
          onClick={handleClick}
        >
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
      </li>
    </>
  );
}

export default UtilityCard;
