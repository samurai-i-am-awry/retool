import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ChooseTool from './ChooseTool';



function AddTool() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Sign-Up
      </Typography>
      <Grid container spacing={24}>
        <ChooseTool />
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
    </React.Fragment>
  );
}

export default AddTool;