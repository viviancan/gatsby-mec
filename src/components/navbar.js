import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";
import mecLogo from "../images/logo-white.svg";
import bulmaLogo from "../images/bulma-logo.png";

const Navbar = () => (
  <div className="hero-head">
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={mecLogo} alt="Logo-1" style={{ height: "50px" }} />
          </a>
          <span
            className="navbar-burger burger"
            data-target="navbarMenuHeroA"
            onClick={() => {
              let menu = document.querySelector(".navbar-menu");
              menu.classList.toggle("is-active");
            }}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">Home</a>
            <a className="navbar-item">Examples</a>
            <a className="navbar-item">Documentation</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
