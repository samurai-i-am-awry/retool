import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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

function ToolCard(props) {
  const { classes, theme } = props;
  console.log(props.details);
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={props.details.image} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Grid item xs container spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {props.details.name}
              </Typography>
              <Typography gutterBottom>{props.details.description}</Typography>
              <Typography color="textSecondary">Renter Email: {props.details.renter_email}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" className={classes.row}>
                Times Rented: {props.details.times_rented}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.row} variant="subtitle1">
                Price/Hour: ${props.details.price_per_hour}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.remove} style={{ cursor: "pointer" }}>Remove</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <div className={classes.controls} />
      </div>
    </Card>
  );
}

ToolCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ToolCard);
