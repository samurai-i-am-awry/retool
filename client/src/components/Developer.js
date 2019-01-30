import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
  },
  image: {
    borderRadius: "50%",
    width: "220px",
    height: "220px",
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

function Developer(props) {
  const { classes } = props;
  console.log(props.details);
  return (
    <div>
      <img
        src={props.details.image}
        alt={props.details.name}
        className={classes.image}
      />
      <Typography>
        <h5>
          {props.details.name}
          <br />
          {props.details.email}
          <br/>
          <a href={props.details.github}>Github</a>
        </h5>
      </Typography>
    </div>
  );
}

Developer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Developer);
