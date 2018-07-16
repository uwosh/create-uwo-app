import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faPinterestP,
  faFlickr
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="footer-top">
          The University of Wisconsin Oshkosh - Where Excellence and Opportunity
          Meet.
        </div>
        <div className="footer-main" />
        <div className="footer-bottom">
          <div className="copyright">©2018 UW Board of Regents</div>
          <div className="social">
            <FontAwesomeIcon
              icon={faFacebookF}
              size="2x"
              className="social-item facebook"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              className="social-item twitter"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="social-item instagram"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              size="2x"
              className="social-item youtube"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2x"
              className="social-item linkedin"
            />
            <FontAwesomeIcon
              icon={faPinterestP}
              size="2x"
              className="social-item pinterest"
            />
            <FontAwesomeIcon
              icon={faFlickr}
              size="2x"
              className="social-item flickr"
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
