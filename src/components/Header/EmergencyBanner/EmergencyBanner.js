import React, { Component } from "react";
import "./EmergencyBanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

class EmergencyBanner extends Component {
  render() {
    return (
      <div
        className={
          "emergency-banner-wrapper " +
          (this.props.emergencyBannerType === "emergency"
            ? "display-banner emergency"
            : this.props.emergencyBannerType === "warning"
              ? "display-banner warning"
              : this.props.emergencyBannerType === "info"
                ? "display-banner info"
                : "")
        }
      >
        <div className="emergency-banner-content">
          <a
            className="broadcast-link"
            href={this.props.emergencyLink}
            target="_blank"
          >
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <span className="broadcast-title">
              {this.props.emergencyTitle + ": "}
            </span>
            <span className="broadcast-description">
              {this.props.emergencyDescription}
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default EmergencyBanner;
