import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Details from "./pages/Details";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import ToolEntry from "./pages/ToolEntry";
import TestTool from "./pages/TestTool";
import Toolbox from "./pages/Toolbox";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/toolentry" component={ToolEntry} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/test" component={TestTool
          } />
          <Route exact path="/toolbox" component={Toolbox} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
