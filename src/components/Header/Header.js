import React, { Component } from "react";
import "./Header.css";
import TopNav from "./TopNav/TopNav";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <TopNav />
      </div>
    );
  }
}

export default Header;
