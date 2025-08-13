import "./FlipCard.scss";
import React from "react";
import logo from "../../assets/logo1.png";

export const FlipCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={logo} alt="logo1" />
        </div>
        <div className="flip-card-back">
          <img src={logo} alt="logo2"/>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
};
