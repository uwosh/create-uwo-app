import React, { Component } from "react";
import "./FooterMain.css";
import Location from "./Location/Location";
import Quicklinks from "./Quicklinks/Quicklinks";
import Resources from "./Resources/Resources";
import Badges from "./Badges/Badges";

class FooterMain extends Component {
  render() {
    return (
      <div className="footer-main">
        <div className="footer-main-wrapper">
          <Location />
          <Quicklinks />
          <Resources />
          <Badges />
        </div>
      </div>
    );
  }
}

export default FooterMain;
