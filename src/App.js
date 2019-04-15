import React, { Component } from 'react';
import NavBar from './components/NavBar';
import AddExpenseContainer from './components/AddExpenseContainer'
import ExpenseListContainer from './components/ExpensesListContainer'

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
          <ExpenseListContainer />
          <AddExpenseContainer />
      </div>
    );
  }
}

export default App;
