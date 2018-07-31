import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beer from './components/beer';

class App extends Component {
  render() {
    return (
      <div>
        <Beer />
      </div>
    );
  }
}

export default App;
