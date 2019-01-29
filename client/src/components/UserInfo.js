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
              <TableCell align="center">{props.user.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Name:</strong>
              </TableCell>
              <TableCell align="center">{props.user.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Zipcode:</strong>
              </TableCell>
              <TableCell align="center">888888</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Phone:</strong>
              </TableCell>
              <TableCell align="center">898532798275239</TableCell>
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