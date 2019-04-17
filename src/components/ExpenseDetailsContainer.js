import React, { Component } from 'react'
import ExpenseDetails from './ExpenseDetails'
import gql from 'graphql-tag'
import {Query, graphql} from 'react-apollo'
import {Redirect} from 'react-router-dom'

const GET_EXPENSE = gql`
  query Expense($id: ID!){
    expense(id: $id){
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
class ExpenseDetailsContainer extends Component {

    state = {
        redirect: false
      }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }

    deleteExpense = (id) => {
        this.props.deleteExpense({
          variables: {id}
        })
        .catch(error => console.log(error))
        this.setState({redirect: true})
      }

    render() {
        
        let id = this.props.match.params.id
        return (
            <div>
            {this.renderRedirect()}
            <Query query={GET_EXPENSE} variables={{id}}>
            {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
                <div>
                <ExpenseDetails
                    delete={this.deleteExpense}
                    expense={data.expense} 
                    />
                </div>
            );
            }}
        </Query>
        </div>)
    }
}

const NewEntryWithData = graphql(DELETE_EXPENSE, {
    name: "deleteExpense",
    options: {
      refetchQueries: ['Expenses']
    }
  })(ExpenseDetailsContainer);
  
  export default NewEntryWithData
