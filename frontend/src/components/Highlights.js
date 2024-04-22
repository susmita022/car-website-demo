import React from "react";

function Highlights(props) {
  return (
    <div className="ignis-highlight">
      <img src={props.src} alt={props.name} />
      <h4>{props.name}</h4>
    </div>
  );
}

export default Highlights;
