import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";

class About extends Component {
  render() {
    return (
      <div>
        <NavWithSidebar current="about" />
        <h1>About</h1>
      </div>
    );
  }
}

export default About;
