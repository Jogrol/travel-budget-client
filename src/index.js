import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo";
import {BrowserRouter} from 'react-router-dom'


const client = new ApolloClient({
  uri: "https://frozen-river-89623.herokuapp.com/"
  // uri: "http://localhost:4000"
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
