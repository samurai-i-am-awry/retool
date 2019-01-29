import React, { Component } from "react";
import Home from "./pages/Home";
import FrontPage from "./pages/FrontPage";
import decode from "jwt-decode";

class App extends Component {

  componentDidMount() {
    this.props.auth.getProfile();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {!isAuthenticated() && (
          <FrontPage auth={this.props.auth} {...this.props} />
        )}
        {isAuthenticated() && <Home auth={this.props.auth} {...this.props} />}
      </div>
    );
  }
}

export default App;
