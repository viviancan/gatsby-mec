import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";
import mecLogo from "../images/mec-logo.png";
import bulmaLogo from "../images/bulma-logo.png";

const Navbar = () => (
  <div className="hero-head">
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={mecLogo} alt="Logo-1" />
          </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
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
