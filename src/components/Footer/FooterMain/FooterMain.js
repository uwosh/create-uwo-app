import React, { Component } from "react";
import "./FooterMain.css";
import Location from "./Location/Location";
import QuickLinks from "./QuickLinks/QuickLinks";
import Resources from "./Resources/Resources";
import Badges from "./Badges/Badges";

class FooterMain extends Component {
  render() {
    return (
      <div className="footer-main">
        <div className="footer-main-wrapper">
          <Location />
          <QuickLinks />
          <Resources />
          <Badges />
        </div>
      </div>
    );
  }
}

export default FooterMain;
