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
            <a
              href="https://www.facebook.com/uwoshkosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                size="2x"
                className="social-item facebook"
              />
            </a>
            <a
              href="https://twitter.com/uwoshkosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="social-item twitter"
              />
            </a>
            <a
              href="http://instagram.com/uwoshkosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="social-item instagram"
              />
            </a>
            <a
              href="http://www.youtube.com/uwosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size="2x"
                className="social-item youtube"
              />
            </a>
            <a
              href="http://www.linkedin.com/edu/school?id=19693"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                className="social-item linkedin"
              />
            </a>
            <a
              href="http://www.pinterest.com/uwoshkosh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faPinterestP}
                size="2x"
                className="social-item pinterest"
              />
            </a>
            <a
              href="http://www.flickr.com/photos/uwoshkosh/sets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFlickr}
                size="2x"
                className="social-item flickr"
              />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
