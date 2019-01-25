import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";

class Details extends Component {
  render() {
    return (
      <div>
        <NavWithSidebar current="details" />
        <h1>Details</h1>
      </div>
    );
  }
}

export default Details;
