import "./NextMatchCard.scss";
import React from "react";

export const NextMatchCard = ({ timer, content }) => {
  return (
    <div className="next-match-card-container">
      <div className="next-match-card-content">
        <span className="next-match-date">
          Duminica,
          <br /> 27 Martie
          <br /> ora 14:00
        </span>
        <div className="next-match-teams-logo">
          <img className="image-logo" src={content.homeTeam.logo} alt="logo" />
          <img className="image-logo" src={content.awayTeam.logo} alt="logo" />
        </div>
      </div>
      <div className="next-match-card-details">Etapa 11</div>
      <div className="next-match-card-deadline">
        <h3 className="deadline-message">Partida incepe in:</h3>
        <h1 className="deadline-time">
          {!(timer.day < 0 || timer.hour < 0 || timer.min < 0 || timer.sec < 0) ? timer.day + "" + timer.hour + ""+ timer.min + "" + timer.sec : "0"}
        </h1>
        <h5 className="deadline-time">{timer.string}</h5>
      </div>
    </div>
  );
};
