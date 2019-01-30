import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Developer from "./Developer";
import classNames from "classnames";

const developers = [
  {
    name: "Nathan Niesel",
    email: "nniesel90@gmail.com",
    image: "Nathan.jpg",
    github: "https://github.com/NateNi"
  },
  {
    name: "Andrea Halloran",
    email: "andreahalloran@utexas.edu",
    image: "Andrea.png",
    github: "https://github.com/andrea-halloran"
  },
  {
    name: "Mihir Kothari",
    email: "mihir.k25@gmail.com",
    image: "Mihir.jpg",
    github: "https://github.com/mihirkothari25"
  },
  {
    name: "Raynor ",
    email: "rfisher708@me.com",
    image: "Raynor.jpg",
    github: "https://github.com/RaynorFisher"
  }
];

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 1150
  },
  image: {
    width: 300,
    height: 300,
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
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
});

function WebsiteInfo(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item className={classes.centering}>
            {/* <ButtonBase className={classes.image}> */}
            <img className={classes.image} alt="complex" src="ReTool.png" />
            {/* </ButtonBase> */}
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <div className={classes.text}>
                  <Typography gutterBottom>
                    <h2 className={classes.title}>About Us</h2>
                  </Typography>
                  <Typography gutterBottom>
                    <p>
                      Re-Tool is a platform for renting and renting-out tools. A
                      user with a profile can search for tools within their area
                      that are available to rent at a fixed price per hour.
                      Alternatively, a user can curate a list of their tools
                      that they are willing to rent to other users. The website
                      features messaging, how-to videos for a searched tool, and
                      a user history.
                      <br />
                      <br />
                      This app was designed as part of the University of Texas
                      Full Stack Coding Bootcamp.
                    </p>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Typography gutterBottom>
          <h2 className={classes.title}>Developers</h2>
        </Typography>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {developers.map(developer => (
              <Grid item xs={12} sm={12} md={4} lg={3} justify='center'>
              <div className={classes.card}>
              <div className={classes.centering}>
                <Developer details={developer} />
              </div>
              </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Paper>
    </div>
  );
}

WebsiteInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WebsiteInfo);
