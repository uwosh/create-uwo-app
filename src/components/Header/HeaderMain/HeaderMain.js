import React, { Component } from "react";
import "./HeaderMain.css";
import "./HeaderMainMobile.css";
import Wordmark from "../../../images/wordmark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    };
    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    if (this.state.menuVisible) {
      this.setState({ menuVisible: false });
    } else {
      this.setState({ menuVisible: true });
    }
  }

  render() {
    return (
      <div className="header-main-wrapper">
        <div className="header-main-content">
          <div className="image-and-title-wrapper">
            <a href="https://uwosh.edu" className="wordmark-wrapper">
              <img
                src={Wordmark}
                alt="University of Wisconsin Oshkosh logo"
                className="wordmark"
              />
            </a>
            <div className="site-title">University of Wisconsin Oshkosh</div>
          </div>
          <nav className="secondary-nav-wrapper">
            <div className="mobile-menu" onClick={this.menuToggle}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <ul
              className={
                "secondary-nav " +
                (this.state.menuVisible ? "active" : "disabled")
              }
            >
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
          </nav>
        </div>
      </div>
    );
  }
}

export default HeaderMain;
