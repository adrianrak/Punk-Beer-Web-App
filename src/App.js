import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import './App.css';
import Beer from './components/beer';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/beers' component={Beer} /> 
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
