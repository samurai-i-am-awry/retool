import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ChooseTool from "./ChooseTool";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import API from "../utils/API";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


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
  popup: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
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
    condition: "",
    description: "",
    owner_email: "",
    open: false
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
  }
    handleDescriptionChange = e => {
      this.setState({
        description: e.target.value
      });
    }

    cleanInput() {
      this.setState({
        name: "",
        pricePerHour: "",
        manufacturer: "",
        minRentalTime: "",
        pictureURL: "",
        deposit: "",
        phone: "",
        tool: "",
        condition: "",
        description: "",
        open: true
      })
  }



    handleClose = () => {
      this.setState({ open: false });
    };

  buttonClick = event => {
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
    this.cleanInput();
    if (
      this.state.tool &&
      this.state.condition &&
      this.state.pricePerHour &&
      this.state.manufacturer &&
      this.state.minRentalTime &&
      this.state.pictureURL &&
      this.state.deposit &&
      this.state.phone &&
      this.state.description
    ) {
      console.log("saving");
      console.log(this.props.user.email)
      API.saveTool({
        tool_type: this.state.tool,
        condition: this.state.condition,
        price_per_hour: this.state.pricePerHour,
        manufacturer: this.state.manufacturer,
        min_rental_time: this.state.minRentalTime,
        picture_url: this.state.pictureURL,
        deposit: this.state.deposit,
        description: this.state.description,
        phone_number: this.state.phone,
        owner_email: this.props.user.email,
        currently_rented: false
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
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                fullWidth
                placeholder="Enter a tool description"
                multiline={true}
                rows={2}
                rowsMax={4}
                value={this.state.description}
                onChange={this.handleDescriptionChange}
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
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.popup}>
            <Typography variant="h6" id="modal-title">
              Success!
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              You added a new tool!  Visit your toolbox to view your tools available to rent.
            </Typography>
          </div>
        </Modal>
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
