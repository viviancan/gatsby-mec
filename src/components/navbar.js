import React from "react";
import { Link } from "gatsby"
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
            <img src={mecLogo} alt="Logo-1" style={{ height: "60px" }} />
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
            <a className="navbar-item" href="/">Home</a>
            <a className="navbar-item">Examples</a>
            <a className="navbar-item">Documentation</a>
            <a className="navbar-item" href="/about">About</a>

            <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
         
        </div>
        </div>
     


          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
