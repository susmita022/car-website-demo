import React, { useState } from "react";

function Call(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <>
      <li className="cards__item">
        <a
          className="cards__item__link"
          href="tel:1800-102-6392"
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
        </a>
      </li>
    </>
  );
}

export default Call;
