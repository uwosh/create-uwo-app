import React, { Component } from "react";
import "./Header.css";
import TopNav from "./TopNav/TopNav";
import HeaderMain from "./HeaderMain/HeaderMain";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <TopNav />
        <HeaderMain />
      </div>
    );
  }
}

export default Header;
