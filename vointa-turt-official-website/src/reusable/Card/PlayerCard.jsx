import "./PlayerCard.scss";
import React from "react";
import logo from "../../assets/teams/vointaTurt.png";

export const PlayerCard = ({ player }) => {
  return (
    <div className="player-card-container">
      <img src={logo} alt="logo1" className="player-team-image" />
      <span className="shirt-number">{player?.number}</span>
      <img src={player?.image} alt="player" className="player-card-image" />
      <div className="fullname">
        <span className="firstname">{player?.firstName}</span>
        <span className="lastname">{player?.lastName}</span>
      </div>
      <div className="player-details">
        <div className="player-detail">
            <span>Varsta</span>
            <span className="player-category-value">{player?.varsta}</span>
        </div>
        <div className="player-detail">
            <span>Pozitie</span>
            <span className="player-category-value">{player?.position}</span>
        </div>
      </div>
    </div>
  );
};
