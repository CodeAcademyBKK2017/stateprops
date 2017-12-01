import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text : 0
  }
  add = ()=>{
    let num = this.state.text + 1;
    this.setState({
      text:num
    });
  }
  sub =()=>{
    let num = this.state.text -1;
    this.setState({
      text:num
    })
  }
  
  render() {
    const btnadd ={
      background: '#0f6512',
      color: '#fff',
      fontSize: '20px',
      padding: '6px 15px'
    }
    const btnsub ={
      background: 'red',
      color: '#fff',
      fontSize: '20px',
      padding: '6px 15px'
    }
    const Number ={
      textAlign: 'center'
    }
    
    return (
      <div className="App">
          <div style ={Number}>
            <h1>{this.state.text}</h1>
            <button style ={btnadd} onClick = {this.add}>ADD</button>
            <button style = {btnsub} onClick = {this.sub}>SUBTRACT</button>
          </div>
      </div>
    );
  }
}

export default App;
