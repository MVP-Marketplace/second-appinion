import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import "boxicons";

const HamBurger = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="second-appinion-navbar">
        <a href="/">
          <img
            src={Logo}
            alt="Second Appinion Logo"
            className="second-appinion-logo"
          ></img>
        </a>
        <button className="hamburger-button" onClick={showSidebar}>
          <box-icon
            name="menu"
            size="lg"
            color="black"
            className="hamburger"
            onClick={showSidebar}
          ></box-icon>
        </button>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <button className="close-button">
              <box-icon
                name="x"
                size="lg"
                color="white"
                className="closeicon"
              ></box-icon>
            </button>
            <ul className="navbar-text">
              <li className="navbar-text">
                <a href="/" className="nav-link">
                  Menu
                </a>
              </li>
              <li className="navbar-text">
                <a href="services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="navbar-text">
                <a href="about" className="nav-link">
                  About
                </a>
              </li>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <li className="navbar-text">
                  <a href="about" className="nav-link">
                    Login
                  </a>
                </li>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <li className="navbar-text">
                  <a href="about" className="nav-link">
                    register
                  </a>
                </li>
              </Link>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default HamBurger;
