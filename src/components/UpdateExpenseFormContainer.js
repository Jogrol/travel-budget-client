
import React, { Component } from 'react'
import gql from "graphql-tag";
import { graphql} from "react-apollo"
import UpdateExpenseForm from './UpdateExpenseForm'

const UPDATE_EXPENSE = gql`
  mutation updateExpense($id: ID!, $description: String!, $ammount: Float!) {
    updateExpense(id: $id, description: $description, ammount: $ammount) {
        id
        description
        ammount
    }
  }
`
class UpdateExpenseFormContainer extends Component {

    state = {
        description: this.props.expense.description,
        ammount: this.props.expense.ammount,
        open: false,
   
    }
    
    handleClickOpen = () => {
      this.setState({ open: true });
    };

    handleClickClose = () => {
      this.setState({ open: false });
    };
 
    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
      
    onSubmit = (event) => {
        event.preventDefault()
        const id = this.props.expense.id
        const description = this.state.description
        const ammount = Number(this.state.ammount)

        this.setState({ open: false });
        this.props.updateExpense({
          variables: {id, description, ammount}
        })
        .catch(error => console.log(error))
      }

    render() {
        return (
        <div>
            <UpdateExpenseForm  
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                handleClickOpen={this.handleClickOpen}
                open={this.state.open}
                handleClickClose={this.handleClickClose}
                />
        </div>
        )
    }
}

const NewEntryWithData = graphql(UPDATE_EXPENSE, {
  name: "updateExpense",
  options: {
    refetchQueries: ['Expense']
  }
})(UpdateExpenseFormContainer);

export default NewEntryWithData


