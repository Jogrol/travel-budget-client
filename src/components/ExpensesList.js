import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
});

function ExpensesList(props) {
  const { classes, expenses } = props;

  console.log(expenses)
  //const avgPricePerEvent = ticketsFilteredByEvent.reduce((prev, ticket) => prev + Number(ticket.price), 0)/ticketsFilteredByEvent.length
  return (
    <Paper className={classes.root}>
       <Card>
         <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
                    Your total expense is: € {expenses.reduce((prev, expense) => prev + expense.ammount,0)}
              </Typography>
          {/* <Typography gutterBottom variant="h4" component="h2">
                    and average spend is: € {Math.round(expenses.reduce((prev, expense) => prev + expense.ammount,0)/expenses.length)}
              </Typography> */}
         </CardContent>
       </Card>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Ammount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.expenses.map(row => (
            <TableRow key={row.id}>
               <TableCell component="th" scope="row">
               <Link to ={`/expenses/${row.id}/`} style={{ color: 'inherit', textDecoration: 'none'}}>{row.description}</Link>
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                € {row.ammount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

ExpensesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpensesList);