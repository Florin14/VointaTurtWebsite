import "./NewsCard.scss";
import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";

const NewsCard = ({ column, row, content }) => {
  return (
    <div
      className="news-card-container"
      style={{ gridColumn: column, gridRow: row }}
    >
      <div
        className="news-image-section"
        style={{ backgroundImage: `url(${content.imageSrc})` }}
      />
      <div className="news-card-content">
        <span className="news-card-title">{content.message}</span>
        <div className="news-card-details">
          <span className="news-card-type">{content.type}</span>
          <span className="news-card-date">| {content.date.slice(0, 10)}</span>
        </div>
      </div>
      <div className="news-card-launch-icon" onClick={() => {}}>
        <LaunchIcon />
      </div>
    </div>
  );
};

export default NewsCard;
