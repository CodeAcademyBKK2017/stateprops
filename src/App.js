import React, {Component} from 'react';
import './App.css';
import Add from './Component/Button/addButton.component';
import Subtract from './Component/Button/subtractButton.component';
import Counter from './Component/Counter/Counter.component';

class App extends Component {
  state = {
    count: 0,
    add: 'ADD',
    subtract: 'SUBTRACT'
  };
  addValue = () => {
    this.setState({count: this.state.count + 1});
  }
  subtractValue = () => {
    this.setState({count: this.state.count - 1});
  }
  render () {
    return (
      <div className="App">
        <Counter style={{fontSize: '80px'}} count={this.state.count}/>
        <div>
          <Add addValue={this.addValue} textValue={this.state.add}/>
          <Subtract subtractValue={this.subtractValue} textValue={this.state.subtract}/>
        </div>
      </div>
    );
  }
}

export default App;
