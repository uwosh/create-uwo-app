import React, { Component } from "react";
import "./Header.css";
import TopNav from "./TopNav/TopNav";
import HeaderMain from "./HeaderMain/HeaderMain";
import EmergencyBanner from "./EmergencyBanner/EmergencyBanner";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <EmergencyBanner />
        <TopNav />
        <HeaderMain />
      </div>
    );
  }
}

export default Header;
