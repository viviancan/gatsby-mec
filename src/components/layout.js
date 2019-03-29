import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Midsection from "./midsection";
import Aboutsection from "./aboutsection";
import Footer from "./footer";
import Navbar from "./navbar"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <div className="site">
      <div className="site-content">{children}</div>
      <Footer />
    </div>
  </div>
);

export default Layout;
