import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";
import FrontPage from "./FrontPage";

const styles = theme => ({
    centering: {
      height: "100%"
    }
  });

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {!isAuthenticated() && (
          <FrontPage auth={this.props.auth} {...this.props} />
        )}
        {isAuthenticated() && (
          <div>
            <NavWithSidebar
              auth={this.props.auth}
              {...this.props}
              current="home"
            />
          </div>
        )}
      </div>
    );
  }
}

<<<<<<< HEAD
    render() {
        const { classes } = this.props;
        return (
            <div>
                <NavWithSidebar current="home"/>
            </div>
        );
    }
};

export default Home;
=======
export default Home;
>>>>>>> 8e31a1dc9f70340f6de57ff857a1b24f469278cf
