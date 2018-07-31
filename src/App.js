import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Beer from './components/beer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Beer />
      </div>
    );
  }
}

export default App;
