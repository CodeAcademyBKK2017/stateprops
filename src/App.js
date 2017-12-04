import React, {Component} from 'react';
import './App.css';

import Button from './components/Button/Button.component';
import Counter from './components/Counter/Counter.component';

class App extends Component {
  state = {
    counter: 0
  }
 
  add = () => () => this.setState({counter: this.state.counter + 1});
  
  subtract = () => () => this.setState({counter: this.state.counter - 1});

  render () {
    return (
      <div className="App">
        <div className="box-result">
          <Counter>{this.state.counter}</Counter>
        </div>
        <div className="box-control">
          <div className="box-control-item box-control-item-left">
            <Button handler={this.add} type="add" title="ADD" />
          </div>
          <div className="box-control-item box-control-item-right">
            <Button handler={this.subtract} type="subtract" title="SUBTRACT" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
