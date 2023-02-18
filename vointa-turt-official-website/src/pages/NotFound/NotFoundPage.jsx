import "./NotFoundPage.scss";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <span className="not-found-404message"> EROARE 404</span>
        <span className="not-found-message"> Pagina nu a fost gasita</span>
        <div className="not-found-page-link-section">
          <NavLink className="not-found-page-link" to="/">
            Acasa <ArrowForwardIcon className="arrowright-icon" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
