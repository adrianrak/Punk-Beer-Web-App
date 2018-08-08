import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Beer from './components/beer';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        {/* <Navbar />
        <Beer /> */}
      </div>
    );
  }
}

export default App;
