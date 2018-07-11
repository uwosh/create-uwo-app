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
          <div className="site-title-wrapper">
            <div className="site-title">University of Wisconsin Oshkosh</div>
          </div>
          <div className="uwo-top-nav-wrapper">
            <ul className="uwo-top-nav">
              <li>
                <a href="https://www.gmail.com/">Email</a>
              </li>
              <li>
                <a href="http://www.uwosh.edu/library">Polk Library</a>
              </li>
              <li>
                <a href="http://www.uwosh.edu/directory">Directory</a>
              </li>
              <li>
                <a href="http://www.uwosh.edu/d2l/">D2L</a>
              </li>
              <li>
                <a href="https://my.wisconsin.edu/">My UW System</a>
              </li>
              <li>
                <a href="http://emergency.uwosh.edu/">Safety</a>
              </li>
              <li>
                <a href="http://www.uwosh.edu/forward/leadership-council/">
                  Leadership Council
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMain;
