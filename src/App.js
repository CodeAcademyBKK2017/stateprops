import React, { Component } from 'react';
import './App.css';
import Box from './components/Box/Box.component';
class App extends Component {
  state = {
      value: 0
  }
  addclickHandler = ()=>{
      this.setState({value: this.state.value+1},()=>{
      });
  }
  subclickHandler = ()=>{
      this.setState({value: this.state.value-1});
  }
  render() {
      return (
          <div className="App" >
              <Box type={"DisplayBox"} name={this.state.value}/>

              <Box type={"ADD"} name={"ADD"} event={this.addclickHandler}/>

              <Box type={"SUBTRACT"} name={"SUBTRACT"} event={this.subclickHandler}/>
          </div>
      );
  }
}

export default App;
