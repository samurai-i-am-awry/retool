import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import App from "./App";
import Auth from "./auth/Auth";
import Callback from "./components/Callback/Callback";
import Details from "./pages/Details";
import history from "./history";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import Search from "./pages/Search";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ToolEntry from "./pages/ToolEntry";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <App auth={auth} {...props} />}
          />
          <Route
            exact
            path="/home"
            render={props => <Home auth={auth} {...props} />}
          />
          <Route
            exact
            path="/signin"
            render={props => <Signin auth={auth} {...props} />}
          />
          <Route
            exact
            path="/signup"
            render={props => <Signup auth={auth} {...props} />}
          />
          <Route
            exact
            path="/results"
            render={props => <Results auth={auth} {...props} />}
          />
          <Route
            exact
            path="/details"
            render={props => <Details auth={auth} {...props} />}
          />
          <Route
            exact
            path="/profile"
            render={props => <Profile auth={auth} {...props} />}
          />
          <Route
            exact
            path="/toolentry"
            render={props => <ToolEntry auth={auth} {...props} />}
          />
          <Route
            exact
            path="/search"
            render={props => <Search auth={auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};
