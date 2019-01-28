import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";
import FrontPage from "./FrontPage";

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {!isAuthenticated() && (
          <FrontPage auth={this.props.auth} {...this.props} />
        )}
        {isAuthenticated() && (
          <div>
            <NavWithSidebar
              auth={this.props.auth}
              {...this.props}
              current="home"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
