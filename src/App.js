import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop';
import Basket from './components/Basket';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Little Lego Store</h2>
          <div className="basket">
            <Basket />
          </div>
        </div>
        <Shop />
      </div>
    );
  }
}

export default App;
