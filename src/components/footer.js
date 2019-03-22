import React from "react";
import { FaTwitter, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";
import Emoji from "./emoji";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center has-background-light">
        <div className="content has-text-centered">
          {/* <article className="media center">
            <span className="icon">
              <a href={data.site.siteMetadata.twitter}>
                <FaInstagram size="fa-2x" color="blue" />
              </a>
            </span>
           
          </article> */}
        
          <p className="is-size-5">
         
          </p>
        </div>
      </footer>
    )}
  />
);

export default Footer;
