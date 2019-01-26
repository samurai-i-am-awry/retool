import React from "react";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ChooseTool from "./ChooseTool";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import API from "../utils/API";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 1000
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

class AddTool extends React.Component {
  state = {
    name: "",
    pricePerHour: "",
    manufacturer: "",
    minRentalTime: "",
    pictureURL: "",
    deposit: "",
    phone: "",
    tool: "",
    condition: ""
  };

/*   handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  }; */
  handlePriceChange = e => {
    this.setState({
      pricePerHour: e.target.value
    });
  };
  handleManufacturerChange = e => {
    this.setState({
      manufacturer: e.target.value
    });
  };
  handleTimeChange = e => {
    this.setState({
      minRentalTime: e.target.value
    });
  };
  handlePictureChange = e => {
    this.setState({
      pictureURL: e.target.value
    });
  };
  handleDepositChange = e => {
    this.setState({
      deposit: e.target.value
    });
  };
  handlePhoneChange = e => {
    this.setState({
      phone: e.target.value
    });
  };
  handleToolChange = toolValue => {
    this.setState({
      tool: toolValue.value
    });
  };
  handleConditionChange = conditionValue => {
    this.setState({
      condition: conditionValue.value
    });
  };
  buttonClick = (event) => {
    console.log("Name: " + this.state.name);
    console.log("Tool: " + this.state.tool);
    console.log("Condition: " + this.state.condition);
    console.log("PricePerHour: " + this.state.pricePerHour);
    console.log("Manufacturer: " + this.state.manufacturer);
    console.log("MinRentalTime: " + this.state.minRentalTime);
    console.log("PictureURL: " + this.state.pictureURL);
    console.log("Deposit: " + this.state.deposit);
    console.log("Phone: " + this.state.phone);

    event.preventDefault();
    if (
      this.state.tool &&
      this.state.condition &&
      this.state.pricePerHour &&
      this.state.manufacturer &&
      this.state.minRentalTime &&
      this.state.pictureURL &&
      this.state.deposit &&
      this.state.phone
    ) {
      API.saveTool({
        tool_type: this.state.tool,
        condition: this.state.condition,
        price_per_hour: this.state.pricePerHour,
        manufacturer: this.state.manufacturer,
        min_rental_time: this.state.minRentalTime,
        picture_url: this.state.pictureURL,
        deposit: this.state.deposit,
        phone_number: this.state.phone
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.paper}>

          <Typography variant="h6" gutterBottom>
            Add a Tool
          </Typography>
          <Grid container spacing={24}>
            {/* <Grid item xs={12}>
              <TextField
                id="toolName"
                name="toolName"
                label="Enter a tool Name"
                fullWidth
                autoComplete=""
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <ChooseTool type="tool" onSelect={this.handleToolChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ChooseTool
                type="condition"
                onSelect={this.handleConditionChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="pricePerHour"
                name="pricePerHour"
                label="Price Per Hour"
                fullWidth
                autoComplete=""
                value={this.state.pricePerHour}
                onChange={this.handlePriceChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="manufacturer"
                name="manufacturer"
                label="Manufacturer"
                fullWidth
                autoComplete=""
                value={this.state.manufacturer}
                onChange={this.handleManufacturerChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="minRentalTime"
                name="minRentalTime"
                label="Minimum Rental Time"
                fullWidth
                autoComplete=""
                value={this.state.minRentalTime}
                onChange={this.handleTimeChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="pictureURL"
                name="pictureURL"
                label="Picture URL"
                fullWidth
                autoComplete=""
                value={this.state.picture}
                onChange={this.handlePictureChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="deposit"
                name="deposit"
                label="Deposit"
                fullWidth
                autoComplete=""
                value={this.state.deposit}
                onChange={this.handleDepositChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone Number"
                fullWidth
                autoComplete="phone number"
                value={this.state.phone}
                onChange={this.handlePhoneChange}
              />
            </Grid>
          </Grid>
          <div className={classes.buttons}>
          
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.buttonClick}
            >
              Add Tool
            </Button>
          </div>
        </Paper>
      </React.Fragment>
    );
  }
}

AddTool.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddTool);

// function AddTool(props) {
//   const { classes } = props;
//   return (
//     <React.Fragment>
//       <Paper className={classes.paper}>
//         <Typography variant="h6" gutterBottom>
//           Add a Tool
//         </Typography>
//         <Grid container spacing={24}>

//         <Grid item xs={12}>
//             <TextField
//               id="toolName"
//               name="toolName"
//               label="Enter a tool Name"
//               fullWidth
//               autoComplete=""
//               value={this.state.name}
//               onChange={this._handleTextFieldChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <ChooseTool type="tool"/>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <ChooseTool type="condition"/>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="pricePerHour"
//               name="pricePerHour"
//               label="Price Per Hour"
//               fullWidth
//               autoComplete=""
//               value={this.state.pricePerHour}
//               onChange={this._handleTextFieldChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="manufacturer"
//               name="manufacturer"
//               label="Manufacturer"
//               fullWidth
//               autoComplete=""
//               value={this.state.manufacturer}
//               onChange={this._handleTextFieldChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               id="minRentalTime"
//               name="minRentalTime"
//               label="Minimum Rental Time"
//               fullWidth
//               autoComplete=""
//               value={this.state.minRentalTime}
//               onChange={this._handleTextFieldChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="pictureURL"
//               name="pictureURL"
//               label="Picture URL"
//               fullWidth
//               autoComplete=""
//               value={this.state.picture}
//               onChange={this._handleTextFieldChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="deposit"
//               name="deposit"
//               label="Deposit"
//               fullWidth
//               autoComplete=""
//               value={this.state.deposit}
//               onChange={this._handleTextFieldChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="phone"
//               name="phone"
//               label="Phone Number"
//               fullWidth
//               autoComplete="phone number"
//               value={this.state.phone}
//               onChange={this._handleTextFieldChange}
//             />
//           </Grid>
//         </Grid>
//         <div className={classes.buttons}>
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.button}
//           >
//             Add Tool
//           </Button>
//         </div>
//       </Paper>
//     </React.Fragment>
//   );
// }

// AddTool.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(AddTool);
