import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React on Docker !! </h1>
        </header>
        <p className="App-intro">
         Changes are made on feature branch...
        </p>
      </div>
    );
  }
}

export default App;
