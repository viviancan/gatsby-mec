import React from "react";
import "./style.scss";

import wall from "../images/wall.jpg";

const Aboutsection = () => (
  <div>
    <section className="section is-5rem-paddding">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-two-fifths">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  {/* <h1 className="title is-size-4">About</h1> */}
                  <p className="subtitle is-size-5">
                    <span className="has-text-weight-bold letter-spacing-3">
                      Modern Earth, LLC
                    </span>{" "}
                    builds with soil and natural resources to create monolithic
                    walls, known as rammed earth. This is an ancient process
                    used to create cemented sustainable energy efficient abodes
                    with terrain. Our specialty is in the unique efficient
                    process and our contemporary design approach that adhere to
                    modern architecture.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column has-text-centered ">
            <figure className="image is-50-per is-inline-block has-img-shadow">
              <img src={wall} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Aboutsection;
