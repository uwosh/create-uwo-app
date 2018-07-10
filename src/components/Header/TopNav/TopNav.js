import React, { Component } from "react";
import "./TopNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

class TopNav extends Component {
  render() {
    return (
      <nav className="top-menu">
        <div className="menu-wrapper">
          <ul className="menu-items">
            <li>
              <a href="https://uwosh.edu/about-uw-oshkosh/">About</a>
            </li>
            <li>
              <a href="https://uwosh.edu/academics/">Academics</a>
            </li>
            <li>
              <a href="http://www.uwoshkoshtitans.com/landing/index">
                Athletics
              </a>
            </li>
            <li>
              <a href="http://www.uwosh.edu/alumni">Alumni</a>
            </li>
            <li>
              <a href="https://uwosh.edu/admissions/">Admissions</a>
            </li>
            <li>
              <a href="https://uwosh.edu/administration/">Administration</a>
            </li>
            <li>
              <a href="https://uwosh.edu/resources/">Resources</a>
            </li>
            <li>
              <a href="https://uwosh.edu/calendars/">Calendars</a>
            </li>
            <li>
              <a href="https://uwosh.edu/titan-services/">Titan Services</a>
              <div className="angle-down-wrapper">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <ul className="sub-menu-items">
                <li>
                  <a href="https://uwosh.edu/site-index/">Site Index</a>
                </li>
                <li>
                  <a href="https://www.uwosh.edu/directory/">Directory</a>
                </li>
                <li>
                  <a href="http://www.uwosh.edu/registrar/titanweb/">
                    Titan Web
                  </a>
                </li>
                <li>
                  <a href="http://www.uwosh.edu/titanapps/">Titan Apps</a>
                </li>
                <li>
                  <a href="https://my.wisconsin.edu/">My UW System</a>
                </li>
                <li>
                  <a href="http://www.uwosh.edu/d2lfaq/d2l-login/">
                    Desire2Learn(D2L)
                  </a>
                </li>
                <li>
                  <a href="http://www.uwosh.edu/library/">Polk Library</a>
                </li>
                <li>
                  <a href="https://portal.housing.uwosh.edu/">MyUWO Portal</a>
                </li>
                <li>
                  <a href="https://uwosh.collegiatelink.net/">
                    Student Clubs & Orgs
                  </a>
                </li>
                <li>
                  <a href="https://uwosh.joinhandshake.com/login">Handshake</a>
                </li>
                <li>
                  <a href="https://uwosh.campus.eab.com/">
                    Student Success Gateway
                  </a>
                </li>
                <li>
                  <a href="https://uwosh.academicworks.com/">Academic Works</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNav;
