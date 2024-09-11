import "./NavbarMenu.scss";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import CancelIcon from "@mui/icons-material/Cancel";
import logo from "../../assets/teams/vointaTurt.png";
import FacebookIcon from "@mui/icons-material/Facebook";

const NavbarMenu = () => {
  const [isMenu, setisMenu] = useState(false);

  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);

  const toggleSubmenu1 = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  const toggleSubmenu2 = () => {
    setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  let boxClassSubMenu2 = ["sub__menus"];
  if (isMenuSubMenu || isMenuSubMenu2) {
    if (isMenuSubMenu) {
      boxClassSubMenu.push("sub__menus__Active");
    }
    if (isMenuSubMenu2) {
      boxClassSubMenu2.push("sub__menus__Active");
    }
  } else {
    boxClassSubMenu.push("");
    boxClassSubMenu2.push("");
  }

  return (
    <header className="header__middle">
      <div className="navbar-container">
        {/* Add Logo  */}
        <div className="header__middle__logo">
          <NavLink activeclassname="is-active" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <NavLink activeclassname="is-active" className="logo-name" to="/">
            <span>ACS VOINTA TURT</span>
          </NavLink>
        </div>
        <div className="header__middle__menus">
          <nav className="main-nav ">
            {/* Responsive Menu Button */}
            {isResponsiveclose === true ? (
              <>
                <span
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  <CancelIcon />
                </span>
              </>
            ) : (
              <>
                <span
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  <FormatAlignRightIcon />
                </span>
              </>
            )}

            <ul className={boxClass.join(" ")}>
              <li className="menu-item">
                <NavLink
                  className="menu-item-underline"
                  activeclassname="is-active"
                  onClick={toggleClass}
                  to={`/`}
                >
                  Acasă
                </NavLink>
              </li>
              <li
                onClick={toggleSubmenu1}
                className="menu-item sub__menus__arrows"
              >
                <Link to="#">
                  Sezon <KeyboardArrowDownIcon />
                </Link>
                <ul className={boxClassSubMenu.join(" ")}>
                  <li>
                    <NavLink
                      className="menu-item-underline"
                      onClick={toggleClass}
                      activeclassname="is-active"
                      to={`/season/2023-2024`}
                    >
                      Sezon curent
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="menu-item-underline"
                      onClick={toggleClass}
                      activeclassname="is-active"
                      to={`/season/2022-2023`}
                    >
                      2022-2023
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="menu-item-underline"
                      onClick={toggleClass}
                      activeclassname="is-active"
                      to={`/season/2021-2022`}
                    >
                      2021-2022
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <NavLink
                  className="menu-item-underline"
                  activeclassname="is-active"
                  onClick={toggleClass}
                  to={`/news`}
                >
                  Știri
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  className="menu-item-underline"
                  activeclassname="is-active"
                  onClick={toggleClass}
                  to={`/gallery`}
                >
                  Galerie
                </NavLink>
              </li>
              <li
                onClick={toggleSubmenu2}
                className="menu-item sub__menus__arrows"
              >
                <Link to="#">
                  Club <KeyboardArrowDownIcon />
                </Link>
                <ul className={boxClassSubMenu2.join(" ")}>
                  <li>
                    <NavLink
                      className="menu-item-underline"
                      onClick={toggleClass}
                      activeclassname="is-active"
                      to={`/players`}
                    >
                      Echipa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="menu-item-underline"
                      onClick={toggleClass}
                      activeclassname="is-active"
                      to={`/history`}
                    >
                      Istorie
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="menu-item-underline"
                      onClick={toggleClass}
                      activeclassname="is-active"
                      to={`/contact`}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__middle__facebook">
          <a className="banner-icon" href="https://www.facebook.com/VointaTurt">
            <FacebookIcon
              activeclassname="is-active"
              sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavbarMenu;
