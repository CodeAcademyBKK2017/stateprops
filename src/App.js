import React, {Component} from 'react';
import './App.css';

import Button from './components/Button/Button.component';
import Counter from './components/Counter/Counter.component';

class App extends Component {
  state = {
    counter: 0
  }
 
  add = () => this.setState({counter: this.state.counter + 1});

  subtract = () => this.setState({counter: this.state.counter - 1});

  render () {
    return (
      <div className="App">
        <Counter>{this.state.counter}</Counter>

        <div className="box-control">
          <div className="box-control-item box-control-item-left">
            <Button onClick={this.add} type="add">ADD</Button>
          </div>
          <div className="box-control-item box-control-item-right">
            <Button onClick={this.subtract} type="subtract">SUBTRACT</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;