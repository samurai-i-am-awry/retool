/* eslint-disable react/prop-types, react/jsx-handler-names */
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ChooseTool from "./ChooseTool";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 1000
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  centering: {
    margin: "auto"
  }
  // background: {
  //   backgroundImage: "url(homeBackground.png)",
  //   height: "100%",
  //   width: "100%"
  // }
});

class SearchBar extends React.Component {
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

        <div className={classes.centering}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Search
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <ChooseTool type="tool" onSelect={this.handleToolChange}/>
            </Grid>
          </Grid>
          <div className={classes.buttons}>
          <Link to={"/results/" + this.state.tool}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Search
            </Button>
            </Link>
          </div>
        </Paper>
        </div>

    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);

/* function Search(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Search
        </Typography>
        <Grid container spacing={24}>
        <Grid item xs={12}>
        <ChooseTool type="tool"/>
          </Grid>
        </Grid>
          <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </Paper>
    </React.Fragment>
    );
  };

  Search.propTypes = {
    classes: PropTypes.object.isRequired
  };

  export default withStyles(styles)(Search); */
