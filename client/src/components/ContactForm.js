/* eslint-disable react/prop-types, react/jsx-handler-names */
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    paper: {
      padding: theme.spacing.unit * 2,
      margin: "auto",
      maxWidth: 1000
    },
    button: {
      marginTop: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit
    }
  });

  class ContactForm extends React.Component {
    state = {
      tool: ""
    };
    handleToolChange = toolValue => {
      this.setState({
        tool: toolValue.value
      });
    };

    render() {
      const { classes } = this.props;

      return (
        <React.Fragment>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12}>
              <Typography>
                Email us at <a href="mailto:retoolteam@gmail.com"> retoolteam@gmail.com</a>
              </Typography>


              </Grid>
            </Grid>
          </Paper>
        </React.Fragment>
      );
    }
  }

  ContactForm.propTypes = {
    classes: PropTypes.object.isRequired
  };

  export default withStyles(styles)(ContactForm);