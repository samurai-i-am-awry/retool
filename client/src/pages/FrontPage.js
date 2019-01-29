import React, { Component } from "react";
import Home from "./Home";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    
  
    }
  },
  paper: {
    backgroundColor: "#22f4db",
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: "#6A6AA0",
    color: "#22f4db"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  }
});

class FrontPage extends Component {
  signin() {
    this.props.history.push("/signin");
  }

  signup() {
    this.props.history.push("/signup");
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const { classes } = this.props;

    return (
      <div>
        {isAuthenticated() && <Home auth={this.props.auth} {...this.props}/>}
        {!isAuthenticated() && (
          <main className={classes.main}>
            <Paper className={classes.paper}>
              <form className={classes.form}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onClick={this.signin.bind(this)}
                >
                  Sign in
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onClick={this.signup.bind(this)}
                >
                  Sign Up
                </Button>
              </form>
            </Paper>
          </main>
        )}
      </div>
    );
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FrontPage);
