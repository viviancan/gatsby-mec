import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Midsection from "./midsection";
import Aboutsection from "./aboutsection";
import Footer from "./footer";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Header />
    <Aboutsection />
    <Midsection />
    <Aboutsection />

    <Footer />
  </div>
);

export default Layout;
