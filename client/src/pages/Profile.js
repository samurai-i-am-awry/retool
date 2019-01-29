import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";

class Profile extends Component {
  render() {
    return (
      <div>
        <NavWithSidebar key="profile" current="profile" />
      </div>
    );
  }
}

export default Profile;
