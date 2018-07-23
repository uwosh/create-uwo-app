import React, { Component } from "react";
import "./Resources.css";

class Resources extends Component {
  render() {
    return (
      <div className="resources-wrapper">
        <div className="resources-title title">Resources</div>
        <ul>
          <li>
            <a href="http://www.uwosh.edu/resources/accessibility">
              Accessibility
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps?q=University+of+Wisconsin+Oshkosh+800+Algoma+Blvd.+Oshkosh,+WI+54901&um=1&ie=UTF-8&hl=en&sa=N&tab=wl">
              Get Directions
            </a>
          </li>
          <li>
            <a href="https://umc.uwosh.edu/for-media/">Media Relations</a>
          </li>
          <li>
            <a href="https://hr.uwosh.edu/careers">Work at UW Oshkosh</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Resources;
