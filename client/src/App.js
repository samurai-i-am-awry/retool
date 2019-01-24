import React, { Component } from "react";
import Home from "./pages/Home";
import FrontPage from "./pages/FrontPage";
import Results from "./pages/Results";
import Details from "./pages/Details";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import ToolEntry from "./pages/ToolEntry";
import TestTool from "./pages/TestTool";
import Toolbox from "./pages/Toolbox";
import About from "./pages/About";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {!isAuthenticated() && <FrontPage auth={this.props.auth} />}
        {isAuthenticated() && <Home />}
      </div>
    );
  }
}

export default App;
