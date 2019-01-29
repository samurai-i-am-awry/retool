import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";
import FrontPage from "./FrontPage"

class Details extends Component {
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
            current="details"
            tool={this.props.match.params.id}
          />
        )}
      </div>
    );
  }
}

export default Details;
