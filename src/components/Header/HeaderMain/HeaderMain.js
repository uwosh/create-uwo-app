import React, { Component } from "react";
import "./HeaderMain.css";
import Wordmark from "../../../images/wordmark.png";

class HeaderMain extends Component {
  render() {
    return (
      <div className="header-main-wrapper">
        <div className="header-main-content">
          <div className="wordmark-wrapper">
            <img
              src={Wordmark}
              alt="University of Wisconsin Oshkosh logo"
              className="wordmark"
            />
          </div>
          <div className="header-main-content-text">
            <div className="site-title">UW Oshkosh</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMain;
