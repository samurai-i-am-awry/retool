import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ChooseTool from './ChooseTool';
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 1000
  }
})

function AddTool(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Add a Tool
      </Typography>
      <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <ChooseTool />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pricePerHour"
            name="pricePerHour"
            label="Price Per Hour"
            fullWidth
            autoComplete=""
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="minRentalTime"
            name="minRentalTime"
            label="Minimum Rental Time"
            fullWidth
            autoComplete=""
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="pictureURL"
            name="pictureURL"
            label="Picture URL"
            fullWidth
            autoComplete=""
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
          />
        </Grid>

      </Grid>
      <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  
                  className={classes.button}
                >
                  Add Tool
                </Button>
              </div>
      </Paper>
    </React.Fragment>
  );
}

AddTool.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddTool);