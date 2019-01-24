import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import ToolCard from "./ToolCard";

const dummyValues = [{
  image: "saw.jpg",
  name: "Nathan's Saw",
  description:
    "This is my saw. It is like new.  Cuts wood well. Rent me Rent me Rent me Rent me Rent me Rent me Rent me Rent me Rent me ",
  email: "nate@gmail.com",
  price_per_hour: 6,
  condition: "Acceptable",
  deposit: 200,
  min_rental_time: 5,
  manufacturer: "Makita",
  times_rented: 8,
  rating: 4,
  renter_email: "nathaniel@gmail.com"
},{
    image: "saw.jpg",
    name: "Andrea's Saw",
    description:
      "This is my saw. It is like new.  Cuts wood well. Rent me Rent me Rent me Rent me Rent me Rent me Rent me Rent me Rent me ",
    email: "nate@gmail.com",
    price_per_hour: 6,
    condition: "Acceptable",
    deposit: 200,
    min_rental_time: 5,
    manufacturer: "Makita",
    times_rented: 8,
    rating: 4,
    renter_email: "nathaniel@gmail.com"
  },{
    image: "saw.jpg",
    name: "Mihir's Saw",
    description:
      "This is my saw. It is like new.  Cuts wood well. Rent me Rent me Rent me Rent me Rent me Rent me Rent me Rent me Rent me ",
    email: "nate@gmail.com",
    price_per_hour: 6,
    condition: "Acceptable",
    deposit: 200,
    min_rental_time: 5,
    manufacturer: "Makita",
    times_rented: 8,
    rating: 4,
    renter_email: "nathaniel@gmail.com"
  },{
    image: "saw.jpg",
    name: "Raynor's Saw",
    description:
      "This is my saw. It is like new.  Cuts wood well. Rent me Rent me Rent me Rent me Rent me Rent me Rent me Rent me Rent me ",
    email: "nate@gmail.com",
    price_per_hour: 6,
    condition: "Acceptable",
    deposit: 200,
    min_rental_time: 5,
    manufacturer: "Makita",
    times_rented: 8,
    rating: 4,
    renter_email: "nathaniel@gmail.com"
  }];

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 1000
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
  }
});

function ToolboxContainer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {dummyValues.map(card => (
          <div className={classes.centering}>
            <ToolCard details={card} />
          </div>
        ))}
      </Paper>
    </div>
  );
}

ToolboxContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToolboxContainer);
