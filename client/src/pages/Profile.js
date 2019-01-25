import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";

class Profile extends Component {
  render() {
    return (
      <div>
        <NavWithSidebar current="profile" />
        <h1>Profile</h1>
      </div>
    );
  }
}

export default Profile;
