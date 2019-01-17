import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Details from "./pages/Details";
import NoMatch from "./pages/NoMatch";
import FrontPage from "./pages/FrontPage"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/details" component={Details} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
