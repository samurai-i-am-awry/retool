import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import API from "../utils/API";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 200
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  row: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  remove: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "red"
  }
});

class ToolCard extends Component {
  state = {
    isRented: false,
    renter: ""
  };

  componentDidMount() {
    this.setState({isRented: this.props.details.currently_rented})
    this.setState({renter: this.props.details.renter_email})
  }

  rentClick = e => {
    let newRented = !this.state.isRented;
    this.setState({isRented: newRented});
    API.rentTool(this.props.details._id, newRented)
      .then(res => this.setRenter())
      .catch(err => console.log(err));
  };

  setRenter = () => {
    this.setState({renter: ""})
    API.setRenter(this.props.details._id, "")
    .then(res => console.log("ITS WORKING"))
      .catch(err => console.log(err));
  }


  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Grid item xs container spacing={16}>
            <Grid item xs>
                <img src={this.props.details.picture_url} alt="tool" height="100px"/>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {this.props.details.tool_type}
                </Typography>
                <Typography gutterBottom>
                  {this.props.details.manufacturer}
                </Typography>
                <Typography gutterBottom>
                  {this.props.details.condition}
                </Typography>

              </Grid>
              <Grid item>
              <Typography className={classes.row}>
                  Renter Email:
                  <br/>
                  {this.state.renter}
                </Typography>
                </Grid>
              <Grid item>
                <Typography className={classes.row}>
                  Price/Hour:
                  <br/>
                  ${this.props.details.price_per_hour}
                </Typography>
              </Grid>

              <Grid item>
                <Typography className={classes.row}>
                  Min Rental Time:
                  <br/>
                  {this.props.details.min_rental_time}
                </Typography>
              </Grid>

              <Grid item>
                <Typography className={classes.row}>
                  Deposit:
                  <br/>
                  ${this.props.details.deposit}
                </Typography>
              </Grid>

              <Grid item>
              <div className={classes.row}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.rentClick}
                >
                  {this.state.isRented
                    ? "Available"
                    : "Unavailable"}
                </Button>
                </div>
              </Grid>

              <Grid item>
                <Typography
                  className={classes.remove}
                  onClick={() => this.props.remove(this.props.details._id)}
                  style={{ cursor: "pointer" }}
                >
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <div className={classes.controls} />
        </div>
      </Card>
    );
  }
}





ToolCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ToolCard);
