import React, { Component } from "react";
import "./FooterBottom.css";
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

class FooterBottom extends Component {
  render() {
    return (
      <div className="footer-bottom">
        <div className="copyright">©2018 UW Board of Regents</div>
        <div className="social">
          <a
            href="https://www.facebook.com/uwoshkosh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="UW Oshkosh Facebook"
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
            aria-label="UW Oshkosh Twitter"
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
            aria-label="UW Oshkosh Instagram"
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
            aria-label="UW Oshkosh YouTube"
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
            aria-label="UW Oshkosh LinkedIn"
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
            aria-label="UW Oshkosh Pinterest"
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
            aria-label="UW Oshkosh Flickr"
          >
            <FontAwesomeIcon
              icon={faFlickr}
              size="2x"
              className="social-item flickr"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default FooterBottom;
