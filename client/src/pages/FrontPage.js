import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

export default class FrontPage extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {isAuthenticated() && <Home />}
        {!isAuthenticated() && (
          <div>
            <Link to={"/signin"}>
              <strong>Sign In</strong>
            </Link>
            <hr />
            <Link to={"/signup"}>
              <strong>Sign Up</strong>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
