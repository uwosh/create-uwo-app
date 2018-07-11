import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emergencyBannerType: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Header emergencyBannerType={this.state.emergencyBannerType} />
      </div>
    );
  }
}

export default App;
