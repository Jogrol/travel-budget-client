import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import UpdateExpenseFormContainer from './UpdateExpenseFormContainer'


const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };

function ExpenseDetails(props) {


const { classes } = props;

  return (
    <div>
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                    Your expense
                </Typography>
                <Typography gutterBottom variant="h6" component="h4">
                    Description: {props.expense.description}
                </Typography>
                <Typography gutterBottom variant="h6" component="h4">
                    Cost: € {props.expense.ammount}
                </Typography>
                <div>
                <UpdateExpenseFormContainer expense={props.expense}/>
                <IconButton style={{float: 'left'}}><DeleteIcon onClick={() => props.delete(props.expense.id)}/></IconButton>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

ExpenseDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ExpenseDetails);
