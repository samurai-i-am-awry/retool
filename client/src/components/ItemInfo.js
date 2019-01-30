import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import API from "../utils/API";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 1000
  },
  paperDetails: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 220
  },
  paperDescription: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 400
  },
  image: {
    width: 400,
    height: 400,
    margin: "auto",
    display: "block"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  title: {
    textAlign: "center",
    marginBottom: "30px"
  },
  contact: {
    textAlign: "center",
    marginTop: "30px"
  },
  text: {
    padding: "30px"
  },
  centering: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  buttons: {
    textAlign: "center"
  }
});

class ItemInfo extends Component {
  state = {
    tool: {}
  };

  componentDidMount() {
    this.findTool();
  }

  findTool = () => {
    console.log(this.props.tool);
    API.getTool(this.props.tool)
      .then(res => this.setState({ tool: res.data }))
      .catch(err => console.log(err));
  };

  rentClick = e => {
    console.log(this.state.tool);
    API.rentTool(this.state.tool._id, true)
      .then(res => this.setRenter())
      .catch(err => console.log(err));
  };

  setRenter = () => {
    API.setRenter(this.state.tool._id, this.props.user.email)
      .then(res => this.findTool())
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item className={classes.centering}>
              {/* <ButtonBase className={classes.image}> */}
              <img
                className={classes.image}
                alt="complex"
                src={this.state.tool.picture_url}
              />
              {/* </ButtonBase> */}
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <div className={classes.text}>
                    <Paper className={classes.paper}>
                      <Typography
                        gutterBottom
                        className={classes.title}
                        variant="h4"
                      >
                        {this.state.tool.tool_type}
                      </Typography>
                      <Typography
                        gutterBottom
                        className={classes.title}
                        variant="h5"
                      >
                        {this.state.tool.manufacturer}
                      </Typography>
                      <Typography gutterBottom variant="h6">
                        Description: {this.state.tool.description}
                        <br />
                      </Typography>
                      <Paper className={classes.paperDetails}>
                        <Typography gutterBottom variant="h6">
                          Condition: {this.state.tool.condition}
                        </Typography>
                        <Typography gutterBottom variant="h6">
                          Min Rental Time: {this.state.tool.min_rental_time}
                        </Typography>
                        <Typography gutterBottom variant="h6">
                          Price/Hour: ${this.state.tool.price_per_hour}
                        </Typography>
                        <Typography gutterBottom variant="h6">
                          Deposit: ${this.state.tool.deposit}
                        </Typography>
                      </Paper>
                      <Typography
                        gutterBottom
                        className={classes.contact}
                        variant="h6"
                      >
                        Contact Me: {this.state.tool.owner_email}
                      </Typography>
                      <div className={classes.buttons}>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          onClick={this.rentClick}
                          disabled={this.state.tool.currently_rented}
                        >
                          Rent Tool
                        </Button>
                      </div>
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

ItemInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemInfo);
