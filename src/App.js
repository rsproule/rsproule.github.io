import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Routes from './Navigation.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    );
  }
}

export default App;
