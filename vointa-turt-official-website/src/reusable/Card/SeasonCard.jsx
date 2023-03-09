import "./SeasonCard.scss";
import React from "react";
import liga4 from "../../assets/liga4.png";

export const SeasonCard = ({
  homeTeam,
  awayTeam,
  matchDate,
  stage,
  result,
  competition
}) => {
  return (
    <div className="season-card-container">
      <img src={liga4} alt="competition" className="season-card-competition" />
      <div className="season-card-date">
        <span>3</span>
        <span>SEP</span>
      </div>
      <div className="season-card-time">
        <span>Liga 4 ELITE</span>
        <span className="season-card-hour">14:00</span>
      </div>
      <div className="season-card-teams">
        <img src={liga4} alt="homeTeam" />
        <span className="season-card-result">2 - 3</span>
        <img src={liga4} alt="awayTeam" />
      </div>
    </div>
  );
};
