import React from "react";
// import { FaGithub } from "react-icons/fa";
import { Link } from "gatsby"

import "./style.scss";
import Navbar from "./navbar";

// const ScrollToLink = () => (
//   <Link to="/#about">Scroll To My Cool Header</Link>
// )

const Header = ({ siteTitle }) => (
  <section className="hero is-fullheight-with-navbar">
    <Navbar />
    <div className="hero-body">
      <div className="container center">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <h1 className="is-uppercase is-size-4-rem has-text-white">
                <div>
                  <span>Modern</span>
                  <span className="slidingVertical">
                    <span> Solutions</span>
                    <span>Design</span>
                    <span>Earth</span>
                  </span>
                </div>
              </h1>
              <p className="subtitle has-text-white is-size-3">
                We specialize in sustainable building processes.
              </p>
              <div className="has-text-centered">
                <Link className="button is-outlined has-text-white is-transparent" to="/#about">LEARN MORE</Link>

              </div>

            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Header;
