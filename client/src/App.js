import React, { Component } from "react";
import Home from "./pages/Home";
import FrontPage from "./pages/FrontPage";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {!isAuthenticated() && <FrontPage login={this.login} />}
        {isAuthenticated() && <Home />}
      </div>
    );
  }
}

export default App;
