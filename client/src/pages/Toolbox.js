import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";

class Toolbox extends Component {
  render() {
    return (
      <div>
        <NavWithSidebar current="toolbox" />
      </div>
    );
  }
}

export default Toolbox;
