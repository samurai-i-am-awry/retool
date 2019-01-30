import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ToolCard from "./ToolCard";
import API from "../utils/API";

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

class ToolboxContainer extends Component {
  state = {
    tools: []
  };

  componentDidMount() {
    this.loadTools();
  }

  loadTools = () => {
    API.myTools(this.props.user.email)
      .then(res => this.setState({ tools: res.data }))
      .catch(err => console.log(err));
  };

  deleteTool = id => {
    API.deleteTool(id)
      .then(res => this.loadTools())
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {this.state.tools.length ? (
            <div>
              {this.state.tools.map(tool => (
                <ToolCard
                  key={tool._id}
                  details={tool}
                  remove={this.deleteTool}
                  className={classes.centering}
                />
              ))}
            </div>
          ) : (
            <h3>No Tools to Display</h3>
          )}
        </Paper>
      </div>
    );
  }
}

ToolboxContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToolboxContainer);

/*
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

export default withStyles(styles)(ToolboxContainer); */
