import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <button onClick={this.props.onClick}>{this.props.title}</button>
    );
  }
}

export default Button;