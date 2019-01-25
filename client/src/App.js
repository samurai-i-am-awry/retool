import React, { Component } from "react";
import Home from "./pages/Home";
import FrontPage from "./pages/FrontPage";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {!isAuthenticated() && (
          <FrontPage auth={this.props.auth} {...this.props} />
        )}
        {isAuthenticated() && <Home />}
      </div>
    );
  }
}

export default App;
