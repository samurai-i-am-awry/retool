import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";

class Home extends Component {
  render() {
    return (
      <div>
        <NavWithSidebar current="home" />
        <h1>Homepage</h1>
      </div>
    );
  }
}

export default Home;
