import React from "react";
import "./style.scss";

import alamoLogo from "../images/clients/alamo-beer-logo.jpg";
import ehLogo from "../images/clients/eh3050-logo.png";
import laFonda from "../images/clients/lafonda-logo.jpg";
import witte from "../images/clients/witte-logo.svg";

const TestimonailSection = () => (
  <div>
    <section className="section" id="testimonial">
      <div className="container">
      <div className="columns has-text-centered">
        <div className="column">
          <figure className="image is-128x128 is-inline-block desktop-logo">
            <img src={alamoLogo} alt=""/> 
          </figure>
        </div>
        <div className="column">
          <figure className="image is-128x128 is-inline-block desktop-logo">
            <img src={ehLogo} alt=""/>  
          </figure>
        </div>
        <div className="column">
          <figure className="image is-128x128 is-inline-block">
            <img src={laFonda} alt=""/> 
          </figure>
        </div>
        <div className="column">
          <figure className="image is-128x128 is-inline-block">
            <img src={witte} alt=""/> 
          </figure>
        </div>
      </div>
      </div>
    </section>
  </div>
);

export default TestimonailSection;
