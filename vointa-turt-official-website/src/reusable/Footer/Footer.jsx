import "./Footer.scss";
import React from "react";
import logo from "../../assets/logo1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-top-section">
          <div className="footer-logos-section">
            <NavLink to='/'>
              <img src={logo} alt="logo1" className="footer-logo" />
            </NavLink>
            <a
              className="footer-facebook-icon"
              href="https://www.facebook.com/VointaTurt"
            >
              <FacebookIcon
                sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
              />
            </a>
          </div>
          <div className="footer-links-section">
            <NavLink to='/' className="footer-links">
              ACASA
            </NavLink>
            <NavLink to='/players' className="footer-links">
              JUCATORI
            </NavLink>
            <NavLink to='/news' className="footer-links">
              STIRI
            </NavLink>
            <NavLink to='/gallery' className="footer-links">
              GALERIE
            </NavLink>
            <NavLink to='/contact' className="footer-links">
              CONTACT
            </NavLink>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d685766.7847012611!2d22.342377971268036!3d47.82454848272601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473821c634e5c2b1%3A0x7a4d1e815e1d978!2sStadion%20Minerul!5e0!3m2!1sro!2sro!4v1676659473927!5m2!1sro!2sro"
          width="80%"
          height="400"
          style={{ border: 0, alignSelf: "center" }}
          allowFullScreen={true}
          loading="lazy"
        />
        <div className="footer-bottom-section">
          <div className="footer-privacy-politicy">
            <p>Politica de confidentialitate</p>
            <p>Termeni si conditii</p>
          </div>
          <p className="footer-credits">
            @ACS VOINTA TURT 2018-2023. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
