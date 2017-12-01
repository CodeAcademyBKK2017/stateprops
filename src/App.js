import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text:0
  }
  addValue = () => {
    let newState = this.state.text + 1;
    this.setState({
      text:newState
    });
  }
  subValue = () => {
    let newState = this.state.text - 1;
    this.setState({
      text:newState
    });
  }
  render() {
    const text1 = {
      padding: '10px',
      fontSize: '30px',
      fontWeight: '600',
    }
    const bt1 = {
      padding: '10px',
      fontSize: '30px',
      fontWeight: '600',
      background: '#ffb000'
    }
    const bt2 = {
      padding: '10px',
      fontSize: '30px',
      fontWeight: '600',
      background: '#007f23',
      color:'#fff'
    }
    return (
      <div className="App" style={{textAlign:'center'}}>
          <div>
            <div style={text1}>{this.state.text}</div>
          </div>
          <button style={bt1} onClick={this.addValue}>Add</button>
          <button style={bt2} onClick={this.subValue}>Subtract</button>
      </div>
    );
  }
}

export default App;
