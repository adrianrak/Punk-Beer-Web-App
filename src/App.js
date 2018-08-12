import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import './App.css';
import Beer from './components/Beers/beer';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
        <HashRouter>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/beers' component={Beer} /> 
            </Switch>
        </HashRouter>
    );
  }
}

export default App;
