import React from "react";
import { FaInstagram } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            instagram
          }
        }
      }
    `}
    render={data =>
      console.log(data) || (
        <footer className="footer center has-background-light">
          <div className="container">
            <div className="columns has-text-white has-text-centered">
              <div className="column">
                <p>
                  303 Queen Anne Ct. <br /> San Antonio, TX 78209
                </p>
              </div>
              <div className="column">
                <p>O: 210-389-8214</p>
                <p>info@modernearth-tx.com</p>
              </div>
              <div className="column">
                <span className="icon">
                  <a href={data.site.siteMetadata.instagram}>
                    <FaInstagram size="fa-2x" color="white" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </footer>
      )
    }
  />
);

export default Footer;

{
  /* <article className="media center">
            <span className="icon">
              <a href={data.site.siteMetadata.twitter}>
                <FaInstagram size="fa-2x" color="blue" />
              </a>
            </span>
           
          </article> */
}
