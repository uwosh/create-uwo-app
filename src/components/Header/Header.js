import React, { Component } from "react";
import "./Header.css";
import TopNav from "./TopNav/TopNav";
import HeaderMain from "./HeaderMain/HeaderMain";
import EmergencyBanner from "./EmergencyBanner/EmergencyBanner";

class Header extends Component {
  render() {
    return (
      <header className="header-wrapper">
        <EmergencyBanner
          emergencyTitle={this.props.emergencyTitle}
          emergencyDescription={this.props.emergencyDescription}
          emergencyLink={this.props.emergencyLink}
          emergencyBannerType={this.props.emergencyBannerType}
        />
        <TopNav emergencyBannerType={this.props.emergencyBannerType} />
        <HeaderMain />
      </header>
    );
  }
}

export default Header;
