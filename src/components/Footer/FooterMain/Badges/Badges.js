import React, { Component } from "react";
import "./Badges.css";
import UWSystemBadge from "./images/uw-system.png";

class Badges extends Component {
  render() {
    return (
      <div className="badges-wrapper">
        <div className="accreditation-wrapper">
          <iframe
            title="accreditation status badge for UW Oshkosh"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
            width="150"
            height="166"
            src="https://cdn.yoshki.com/iframe/54732.html"
          />
        </div>
        <div className="uw-system-badge-wrapper">
          <img src={UWSystemBadge} alt="University of Wisconsin System Badge" />
        </div>
      </div>
    );
  }
}

export default Badges;
