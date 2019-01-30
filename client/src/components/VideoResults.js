import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import VideoCard from "./VideoCard";
import API from "../utils/API";

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
  centering: {
    marginLeft: "auto",
    marginRight: "auto"
  }
});

class VideoResults extends Component {
  state = {
    videos: [],
    tool: {}
  };

  findTool = () => {
    API.getTool(this.props.tool)
      .then(res => this.searchVideos(res.data.tool_type))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.findTool();
  }

  searchVideos = type => {
    API.getVideos("how%20to%20use%20" + type)
      .then(res => this.setState({ videos: res.data.items.slice(0, 3) }))
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />

        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {this.state.videos.map(video => (
              <Grid
                item
                key={video}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                justify="center"
              >
                <Card className={classes.card}>
                  <div className={classes.centering}>
                    <VideoCard result={video} />
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

VideoResults.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoResults);
