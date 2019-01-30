import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import API from "../utils/API";
import Button from "@material-ui/core/Button";

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
  paperDetails: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 220
  },
  paperDescription: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 400
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
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  buttons: {
    textAlign: "center"
  }
});

class ItemInfo extends Component {
  state = {
    tool: {}
  };

  componentDidMount() {
    this.findTool();
  }

  findTool = () => {
    console.log(this.props.tool);
    API.getTool(this.props.tool)
      .then(res => this.setState({ tool: res.data }))
      .catch(err => console.log(err));
  };

  rentClick = (e) => {
    console.log(this.state.tool);
    API.rentTool(this.state.tool._id, true)
    .then(res => this.setRenter())
      .catch(err => console.log(err));
  }


  setRenter = () => {
    API.setRenter(this.state.tool._id, this.props.user.email)
    .then(res => this.findTool())
      .catch(err => console.log(err));
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item className={classes.centering}>
              {/* <ButtonBase className={classes.image}> */}
              <img
                className={classes.image}
                alt="complex"
                src={this.state.tool.picture_url}
              />
              {/* </ButtonBase> */}
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <div className={classes.text}>
                  <Paper className={classes.paper}>
                    <Typography gutterBottom>
                      <h2 className={classes.title}>
                        {this.state.tool.tool_type}
                      </h2>
                    </Typography>
                    
                    <Typography gutterBottom>
                      <h3 className={classes.title}>
                        {this.state.tool.manufacturer}
                      </h3>
                    </Typography>
                    
                
                    <Typography gutterBottom>
                      <h5>Description: {this.state.tool.description}</h5>
                      <br/>
                    </Typography>
               
                    <Paper className={classes.paperDetails}>
                   
                    <Typography gutterBottom>
                      <h5>Condition: {this.state.tool.condition}</h5>
                    </Typography>
                    <Typography gutterBottom>
                      <h5>Min Rental Time: {this.state.tool.min_rental_time}</h5>
                    </Typography>
                    <Typography gutterBottom>
                      <h5>Price/Hour: ${this.state.tool.price_per_hour}</h5>
                    </Typography>
                    <Typography gutterBottom>
                      <h5>Deposit: ${this.state.tool.deposit}</h5>
                    </Typography>
                    </Paper>
                    <Typography gutterBottom>
                      <h5 className={classes.contact}>
                        Contact Me: {this.state.tool.owner_email}
                      </h5>
                    </Typography>
                    <div className={classes.buttons}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.rentClick}
                        disabled={this.state.tool.currently_rented}
                      >
                        Rent Tool
                      </Button>
                    </div>
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

ItemInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemInfo);

// function ItemInfo(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={16}>
//           <Grid item className={classes.centering}>
//             {/* <ButtonBase className={classes.image}> */}
//               <img
//                 className={classes.image}
//                 alt="complex"
//                 src={dummyValues.image}
//               />
//             {/* </ButtonBase> */}
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={16}>
//               <Grid item xs>
//                 <div className={classes.text}>
//                   <Typography gutterBottom>
//                     <h2 className={classes.title}>{props.tool}</h2>
//                   </Typography>
//                   <Typography gutterBottom>
//                     <h5>Description: {dummyValues.description}</h5>
//                   </Typography>
//                   <Typography gutterBottom>
//                     <h5 className={classes.contact}>Contact Me: {dummyValues.email}</h5>
//                   </Typography>
//                 </div>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }

// ItemInfo.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(ItemInfo);
