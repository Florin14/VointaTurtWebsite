import React, { useEffect } from "react";
import './Preloader.scss'
// import { preLoaderAnim } from "./animations";
import logo from "../../assets/teams/vointaTurt.png";

const PreLoader = () => {
//   useEffect(() => {
//     preLoaderAnim();
//   }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Curator,</span>
        <img src={logo} alt="logo1" />
      </div>
    </div>
  );
};

export default PreLoader;