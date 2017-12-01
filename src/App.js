import React, { Component } from 'react';
import './App.css';
import Add from './Add';
import Display from './Display';
import Subtract from './Subtract';
class App extends Component {
  state = {
    value : 0
  }
  addclickHandler = ()=>{
    this.setState({value:this.state.value+1},()=>{
    })
  }

  subclickHandler = ()=>{
    this.setState({value:this.state.value-1},()=>{
    })
  }
  render() {
    return (
      <div className="App">
          <Display value={this.state.value}/>
          <Add addclickHandler={this.addclickHandler}/>
          <Subtract subclickHandler={this.subclickHandler}/>
      </div>
    );
  }
}

export default App;
