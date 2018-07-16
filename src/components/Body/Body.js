import React, { Component } from "react";
import "./Body.css";

class Body extends Component {
  render() {
    return (
      <div className="body-wrapper">
        <main className="content-wrapper">
          <h1>Body Title</h1>
          <p>Body text.</p>
        </main>
      </div>
    );
  }
}

export default Body;
