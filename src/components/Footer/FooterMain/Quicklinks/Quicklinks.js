import React, { Component } from "react";
import "./QuickLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

class QuickLinks extends Component {
  render() {
    return (
      <div className="quickLinks-wrapper">
        <div className="quickLinks-title title">Quick Links</div>
        <div className="quickLinks-content-wrapper">
          <a href="http://www.uwosh.edu/go/mobile" className="link-wrapper">
            <FontAwesomeIcon icon={faMobile} className="quickLinks-icon" />
            <span>Download UW Oshkosh's Mobile App</span>
          </a>
          <a href="https://uwosh.edu/emergency" className="link-wrapper">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="quickLinks-icon"
            />
            <span>Emergency and Safety Information</span>
          </a>
        </div>
      </div>
    );
  }
}

export default QuickLinks;
