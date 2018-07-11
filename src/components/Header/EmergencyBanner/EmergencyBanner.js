import React, { Component } from "react";
import "./EmergencyBanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

class EmergencyBanner extends Component {
  render() {
    return (
      <div className="emergency-banner-wrapper emergency">
        <div className="emergency-banner-content">
          <a className="broadcast-link" href="" target="_blank">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <span className="broadcast-title">This is an emergency title</span>
            <span className="broadcast-description">
              this is an emergency description and it is a little bit longer
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default EmergencyBanner;
