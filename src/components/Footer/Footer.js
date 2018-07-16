import React, { Component } from "react";
import "./Footer.css";
import FooterMain from "./FooterMain/FooterMain";
import FooterBottom from "./FooterBottom/FooterBottom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="footer-top">
          The University of Wisconsin Oshkosh - Where Excellence and Opportunity
          Meet.
        </div>
        <FooterMain />
        <FooterBottom />
      </footer>
    );
  }
}

export default Footer;
