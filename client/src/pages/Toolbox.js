import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";

class Toolbox extends Component {
  render() {
    return (
      <div>
        <NavWithSidebar current="toolbox" />
        <h1>Toolbox</h1>
      </div>
    );
  }
}

export default Toolbox;
