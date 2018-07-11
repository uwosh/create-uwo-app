import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emergencyTitle: "",
      emergencyDescription: "",
      emergencyLink: "",
      emergencyBannerType: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://wwwtest.uwosh.edu/emergency/wp-json/wp/v2/posts?categories=4"
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        const title = json[0].title.rendered;
        const description = json[0].content.rendered.replace(
          /<\/?[^>]+(>|$)/g,
          ""
        );
        const link = json[0].link;
        const emergencyType = this.parseEmergencyType(json[0].categories);
        this.setState({
          emergencyTitle: title,
          emergencyDescription: description,
          emergencyLink: link,
          emergencyBannerType: emergencyType
        });
      });
  }

  parseEmergencyType(categories) {
    const emergencyTypes = {
      emergency: 8,
      warning: 7,
      info: 6
    };
    const commonIds = Object.values(emergencyTypes).filter(element =>
      categories.includes(element)
    );
    const emergencyType = Object.keys(emergencyTypes).find(
      key => emergencyTypes[key] === commonIds[0]
    );
    return emergencyType;
  }

  render() {
    return (
      <div className="App">
        <Header
          emergencyTitle={this.state.emergencyTitle}
          emergencyDescription={this.state.emergencyDescription}
          emergencyLink={this.state.emergencyLink}
          emergencyBannerType={this.state.emergencyBannerType}
        />
      </div>
    );
  }
}

export default App;
