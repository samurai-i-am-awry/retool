import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Details from "./pages/Details";
import NoMatch from "./pages/NoMatch";
<<<<<<< HEAD
import Search from "./pages/Search"; 
=======
import Profile from "./pages/Profile";
import ToolEntry from "./pages/ToolEntry";
>>>>>>> d2ec9376e236ba57b747ff054fcdb3590d464c07


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
<<<<<<< HEAD
          <Route exact path="/search" component={Search} />
=======
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/toolentry" component={ToolEntry} />
>>>>>>> d2ec9376e236ba57b747ff054fcdb3590d464c07
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
