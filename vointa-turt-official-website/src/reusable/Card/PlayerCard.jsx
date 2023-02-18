import "./PlayerCard.scss";
import React from "react";
import photo from "../../assets/ZimbruGrigoreFlorin.png";
import logo from "../../assets/logo1.png";

export const PlayerCard = () => {
  return (
    <div className="player-card-container">
      <img src={logo} alt="logo1" className="player-team-image" />
      <span className="shirt-number">14</span>
      <img src={photo} alt="player" className="player-card-image" />
      <div className="fullname">
        <span className="firstname">Florin</span>
        <span className="lastname">Zimbru</span>
      </div>
      <div className="player-details">
        <div className="player-detail">
            <span>Varsta</span>
            <span className="player-category-value">20</span>
        </div>
        <div className="player-detail">
            <span>Pozitie</span>
            <span className="player-category-value">Fundas</span>
        </div>
      </div>
    </div>
  );
};
