
import React, { Component } from 'react'
import AddExpenseForm from './AddExpenseForm'

import gql from "graphql-tag";
import { graphql} from "react-apollo"

const CREATE_EXPENSE = gql`
  mutation createExpense($description: String!, $ammount: Float!) {
    createExpense(description: $description, ammount: $ammount) {
      id
      description
      ammount
    }
  }
`
class AddExpenseContainer extends Component {

    state = {
        description: '',
        ammount: ' ',
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
        const description = this.state.description
        const ammount = Number(this.state.ammount)
        this.setState({ open: false });
        this.props.createExpense({
          variables: {description, ammount}
        })
        .catch(error => console.log(error))
      }

    render() {
        return (
        <div>
            <AddExpenseForm  
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                handleClickOpen={this.handleClickOpen}
                open={this.state.open}
                handleClickClose={this.handleClickClose}/>
        </div>
        )
    }
}

const NewEntryWithData = graphql(CREATE_EXPENSE, {
  name: "createExpense",
  options: {
    refetchQueries: ['Expenses']
  }
})(AddExpenseContainer);

export default NewEntryWithData


