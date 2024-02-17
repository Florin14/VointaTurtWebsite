import "./NotFoundPage.scss";
import React from "react";
import HomeButton from "../../reusable/HomeButton/HomeButton";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <span className="not-found-404message"> EROARE 404</span>
        <span className="not-found-message"> Pagina nu a fost gasita</span>
        <HomeButton name="Acasa" linkTo={"/"} />
      </div>
    </div>
  );
};

export default NotFoundPage;
