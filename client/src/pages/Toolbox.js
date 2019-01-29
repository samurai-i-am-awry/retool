import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";
import FrontPage from "./FrontPage"

class Toolbox extends Component {
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
            current="toolbox"
          />
        )}
      </div>
    );
  }
}

export default Toolbox;
