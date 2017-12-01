import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }

  add = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  subtract = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.subtract}>-</button>
        <span>{this.state.counter}</span>
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

export default App;
