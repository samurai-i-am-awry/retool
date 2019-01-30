import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import API from "../utils/API";
import { Link } from "react-router-dom";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
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
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  },
  wrapper: {},
  available: {
    color: "green"
  },
  unavailable: {
    color: "red"
  }
});

class SearchResults extends Component {
  state = {
    tools: []
  };

  componentDidMount() {
    this.searchTools();
  }

  searchTools = () => {
    API.searchTools(this.props.tool)
      .then(res => this.setState({ tools: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />

        {/* Hero unit */}

        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          {/* <Grid container spacing={40}> */}
          {this.state.tools.length ? (
            // <div className={classes.wrapper}>
            <Grid container spacing={40}>
              {this.state.tools.map(card => (
                <Grid item key={card._id + "grid"} sm={6} md={4} lg={3}>
                  <Card key={card._id + "card"} className={classes.card}>
                    <CardMedia
                      key={card._id + "media"}
                      className={classes.cardMedia}
                      image={card.picture_url}
                      title="Image title"
                    />
                    <CardContent
                      key={card._id + "content"}
                      className={classes.cardContent}
                    >
                      <Typography
                        key={card._id + "manufacturer"}
                        align="center"
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {card.manufacturer}
                      </Typography>
                      <Typography key={card._id + "condition"}>
                        Condition: {card.condition}
                      </Typography>
                      <Typography key={card._id + "price"}>
                        Price/Hour: ${card.price_per_hour}
                      </Typography>
                      <Typography
                        key={card._id + "availability"}
                        className={
                          card.currently_rented
                            ? classes.unavailable
                            : classes.available
                        }
                      >
                        {card.currently_rented ? "Unavailable" : "Available"}
                      </Typography>
                    </CardContent>
                    <CardActions key={card._id + "actions"}>
                      <Link to={"/details/" + card._id}>
                        <Button key={card._id} size="small" color="primary">
                          View
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <h3>No Tools to Display</h3>
          )}
        </div>
      </React.Fragment>
    );
  }
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchResults);
