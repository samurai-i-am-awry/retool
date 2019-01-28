import React, { Component } from "react";
import Home from "./pages/Home";
import FrontPage from "./pages/FrontPage";
import decode from "jwt-decode";

const styles = theme => ({

});

class App extends Component {
<<<<<<< HEAD
  
=======
  componentDidMount() {
    if (localStorage.getItem("id_token")) {
      let idTokenPayload = decode(localStorage.getItem("id_token"));
      console.log(idTokenPayload);
    }
  }

>>>>>>> 8e31a1dc9f70340f6de57ff857a1b24f469278cf
  render() {
    const { isAuthenticated } = this.props.auth;
    const { classes } = this.props;
    return (
<<<<<<< HEAD
      <div >
        {!isAuthenticated() && <FrontPage auth={this.props.auth} />}
        {isAuthenticated() && <Home />}
=======
      <div>
        {!isAuthenticated() && (
          <FrontPage auth={this.props.auth} {...this.props} />
        )}
        {isAuthenticated() && <Home auth={this.props.auth} {...this.props} />}
>>>>>>> 8e31a1dc9f70340f6de57ff857a1b24f469278cf
      </div>
    );
  }
}

export default App;
