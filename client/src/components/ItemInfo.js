import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const dummyValues = {
  image: "saw.jpg",
  name: "Nathan's Saw",
  description:
    "This is my saw. It is like new.  Cuts wood well. Rent me Rent me Rent me Rent me Rent me Rent me Rent me Rent me Rent me ",
    email: "nate@gmail.com"
};

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
    margin: 'auto',
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
    marginLeft: 'auto',
    marginRight: 'auto'
  }

});

function ItemInfo(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item className={classes.centering}>
            {/* <ButtonBase className={classes.image}> */}
              <img
                className={classes.image}
                alt="complex"
                src={dummyValues.image}
              />
            {/* </ButtonBase> */}
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <div className={classes.text}>
                  <Typography gutterBottom>
                    <h2 className={classes.title}>{dummyValues.name}</h2>
                  </Typography>
                  <Typography gutterBottom>
                    <h5>Description: {dummyValues.description}</h5>
                  </Typography>
                  <Typography gutterBottom>
                    <h5 className={classes.contact}>Contact Me: {dummyValues.email}</h5>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ItemInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemInfo);
