import React,{ Component } from 'react';
import './App.css';

class UI extends Component {

  render() {
    const {data,oparate} = this.props
    return (
        <div className="App">
          <div className="Cell">{data}</div>
          <div className="App-intro">
            <button style={{backgroundColor:'Green'}} onClick={oparate(true)}>ADD</button>
            <button style={{backgroundColor:'Blue'}} onClick={oparate(false)}>SUBTRACT</button>
          </div>
        </div>
    );
  }
}

export default UI
