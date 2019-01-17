import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FrontPage extends Component {
  render() {
    return (
      <div>
        <Link to={"/signin"}>
          <strong>Sign In</strong>
        </Link>
        <hr />
        <Link to={"/signup"}>
          <strong>Sign Up</strong>
        </Link>
      </div>
    );
  }
}
