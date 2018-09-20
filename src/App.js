import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var Diamond = require('./assets/logoOk.png');

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="one-fourth" id="html">
          <img src={Diamond} alt=""/>
        </section>
      </div>
    );
  }
}

export default App;
