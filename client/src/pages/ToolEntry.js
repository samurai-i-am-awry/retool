import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";

class Profile extends Component {
  render() {
    return (
      <div>
        <NavWithSidebar current="toolentry" />
        <h1>ToolEntry</h1>
      </div>
    );
  }
}

export default Profile;
