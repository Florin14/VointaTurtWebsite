import "./MatchCard.scss";
import React from "react";
import logoHomeTeam from "../../assets/logo1.png";
import logoAwayTeam from "../../assets/stiintaBeltiug.png";

export const MatchCard = () => {
  return (
    <div className="match-card-container">
      <div className="match-card-content">
        <img className="image-logo" src={logoHomeTeam} alt="logo" />
        <span className="result-home">3 - 2</span>
        <img className="image-logo" src={logoAwayTeam} alt="logo" />
      </div>
      <div className="match-card-details">
        <span className="match-card-details date">Dum, 27 Oct</span>
        <span className="match-card-details stage">Etapa 11</span>
      </div>

    </div>
  );
};
