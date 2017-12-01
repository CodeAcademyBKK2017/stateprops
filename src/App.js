import React, { Component } from 'react';
import './App.css';
import UI from'./UI.js'

class App extends Component {
  state = {
    value:1
  }

  oparate = (arg)=>()=>{
    let num = this.state.value;
    arg === true?this.setState({value:num+1}):this.setState({value:num-1});
  }
  render() {
    return (
      <UI data={this.state.value} oparate={this.oparate}/>
    );
  }
}

export default App;
