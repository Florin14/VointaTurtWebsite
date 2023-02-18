import "./Layout.scss";
import React from "react";
import { Outlet } from "react-router-dom";
import NavbarMenu from "../../reusable/NavbarMenu/NavbarMenu";
import Footer from "../../reusable/Footer/Footer";
import { LoadingScreen } from "../../reusable/LoadingScreen/LoadingScreen";

export const Layout = () => {
  return (
    <LoadingScreen>
      <div className="layout">
        <div className="layout-container">
          <NavbarMenu />
          <div className="layout-content">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </LoadingScreen>
  );
};
