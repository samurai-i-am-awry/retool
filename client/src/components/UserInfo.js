import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  table: {
    minWidth: 250,
    maxWidth: 500
  }, 
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },   
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
}});

const dummyValues = {
    email: "a@a.com",
    firstName: "Nate",
    lastName: "Niesel",
    zip: "78681",
    phone: "123456789"
}



function SimpleTable(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
    <Typography variant="h3">
                  My Profile
    </Typography>

    <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Email:</strong>
              </TableCell>
              <TableCell align="center">{dummyValues.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Name:</strong>
              </TableCell>
              <TableCell align="center">{dummyValues.firstName + " " + dummyValues.lastName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Zipcode:</strong>
              </TableCell>
              <TableCell align="center">{dummyValues.zip}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Phone:</strong>
              </TableCell>
              <TableCell align="center">{dummyValues.phone}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Paper>
    </main>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);