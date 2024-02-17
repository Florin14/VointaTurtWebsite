import { matches2022_2023 } from "../../data/data";
import "./NextMatchCard.scss";
import React from "react";
import moment from "moment";
import "moment/locale/ro";
import { useState } from "react";
import { getTimer } from "../utils/Timer";

export const NextMatchCard = ({ timer }) => {
  const [deadline, setDeadline] = useState({});
  setTimeout(() => {
    setDeadline(getTimer(new Date("27 July  2023 14:00:00").getTime()));
  }, 1000);

  const match = matches2022_2023[0];
  const timerIsValid =
    deadline?.day < 0 ||
    deadline?.hour < 0 ||
    deadline?.min < 0 ||
    deadline?.sec < 0;

  return (
    <div className="next-match-card-container">
      <div className="next-match-card-content">
        <span className="next-match-date">
          Duminica,
          <br /> 27 Martie
          <br /> ora 14:00
        </span>
        <div className="next-match-teams-logo">
          <img className="image-logo" src={match?.homeTeam?.logo} alt="logo" />
          <img className="image-logo" src={match?.awayTeam?.logo} alt="logo" />
        </div>
      </div>
      <div className="next-match-card-details">Etapa 11</div>
      <div className="next-match-card-deadline">
        <h3 className="deadline-message">Partida incepe in:</h3>
        <h1 className="deadline-time">
          {timerIsValid
            ? "0"
            : deadline?.day + "" + deadline?.hour + "" + deadline?.min + "" + deadline?.sec}
        </h1>
        <h5 className="deadline-time">{deadline?.string}</h5>
      </div>
    </div>
  );
};
