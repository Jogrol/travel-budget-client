import React, { Component } from 'react'
import ExpensesList from './ExpensesList'
import gql from 'graphql-tag'
import {Query, graphql} from 'react-apollo'

const GET_EXPENSES = gql`
  query Expenses
    {
        expenses{
            id
            description
            ammount
      }
    }
`;

const DELETE_EXPENSE = gql`
  mutation deleteExpense($id: ID!) {
    deleteExpense(id: $id) {
      id
      description
      ammount
    }
  }
`

class ExpensesListContainer extends Component {

  deleteExpense = (id) => {
    this.props.deleteExpense({
      variables: {id}
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
    <Query query={GET_EXPENSES}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <div>
        <ExpensesList 
            expenses={data.expenses} 
            delete={this.deleteExpense}
            handleClickOpen={this.handleClickOpen}/>
        </div>
      );
    }}
  </Query>)
  }
}

const NewEntryWithData = graphql(DELETE_EXPENSE, {
  name: "deleteExpense",
  options: {
    refetchQueries: ['Expenses']
  }
})(ExpensesListContainer);

export default NewEntryWithData