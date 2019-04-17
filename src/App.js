import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ExpenseListContainer from './components/ExpensesListContainer'
import ExpenseDetailsContainer from './components/ExpenseDetailsContainer'
import { Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faEdit, faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee, faEdit, faPlusCircle, faTimes)


class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
          <Route path="/" exact component={ExpenseListContainer} />
          <Route path="/expenses/:id" exact component={ExpenseDetailsContainer} />
      </div>
    );
  }
}

export default App;
