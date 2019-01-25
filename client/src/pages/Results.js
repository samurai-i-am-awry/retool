import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";

class Results extends Component {
  render() {
    return (
      <div>
        <NavWithSidebar current="results" />
        <h1>Results</h1>
      </div>
    );
  }
}

export default Results;
