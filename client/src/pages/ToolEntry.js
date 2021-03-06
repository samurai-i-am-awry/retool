import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";
import FrontPage from "./FrontPage"

class Profile extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {!isAuthenticated() && (
          <FrontPage auth={this.props.auth} {...this.props} />
        )}
        {isAuthenticated() && (
          <NavWithSidebar
            auth={this.props.auth}
            {...this.props}
            current="toolentry"
            key="toolentry"
          />
        )}
      </div>
    );
  }
}

export default Profile;
