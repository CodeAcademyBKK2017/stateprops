import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text : 0,
    add: 'ADD',
    subtract: 'SUBTRACT'
  }
  addValue = () => {
    let newValue = this.state.text + 1;
    this.setState({ text : newValue })
  }
  subtractValue = () => {
    let newValue = this.state.text - 1;
    this.setState({text : newValue })
  }
  render() {
    return (
      <div className="App">
        <h1 style={{ fontSize: '40px' }}>{this.state.text}</h1>
        <div>
          <button onClick = {this.addValue} >{this.state.add}</button>
          <button onClick = {this.subtractValue} >{this.state.subtract}</button>
        </div>
      </div>
    );
  }
}

export default App;
