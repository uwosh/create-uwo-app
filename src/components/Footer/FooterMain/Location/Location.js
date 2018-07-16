import React, { Component } from "react";
import "./Location.css";
import Wismap from "./images/wismap-color.png";

class Location extends Component {
  render() {
    return (
      <div className="wisconsin-wrapper">
        <div className="location">
          <a
            href="https://maps.google.com/maps?q=University+of+Wisconsin+Oshkosh+800+Algoma+Blvd.+Oshkosh,+WI+54901&um=1&ie=UTF-8&hl=en&sa=N&tab=wl"
            target="_blank"
            rel="noopener noreferrer"
            className="wisconsin-map-link"
          >
            <img
              src={Wismap}
              alt="The state of Wisconsin with the city of oshkosh labeled with a star"
              className="wisconsin-map-img"
            />
          </a>
          <div className="location-information">
            <div className="title">Location</div>
            <a
              href="https://maps.google.com/maps?q=University+of+Wisconsin+Oshkosh+800+Algoma+Blvd.+Oshkosh,+WI+54901&um=1&ie=UTF-8&hl=en&sa=N&tab=wl"
              target="_blank"
              rel="noopener noreferrer"
              className="address-link"
            >
              <address className="campus-address">
                University of Wisconsin Oshkosh<br />
                800 Algoma Blvd.<br />
                Oshkosh, WI 54901<br />
              </address>
            </a>
            <a className="phone-link" href="tel:9204241234">
              (920) 424-1234
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
