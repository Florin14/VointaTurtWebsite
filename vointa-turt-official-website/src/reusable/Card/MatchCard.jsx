import "./MatchCard.scss";
import React from "react";
import { translatedDate, translatedDays } from "../../data/data";

export const MatchCard = ({ result }) => {
  const d = new Date(result.date);
  console.log(d.getDate());
  return (
    <div className="match-card-container">
      <div className="match-card-content">
        <img className="image-logo" src={result.homeTeam.logo} alt="logo" />
        <span className="result-home">{result.result}</span>
        <img className="image-logo" src={result.awayTeam.logo} alt="logo" />
      </div>
      <div className="match-card-details">
        <span className="match-card-details date">
          {translatedDays[d.getDay()].short}, {d.getDate()}{" "}
          {translatedDate[d.getMonth()]}
        </span>
        <span className="match-card-details stage">Etapa {result.stage}</span>
      </div>
    </div>
  );
};
