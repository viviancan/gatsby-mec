import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Midsection from "./midsection";
import Aboutsection from "./aboutsection";
import Footer from "./footer";

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
