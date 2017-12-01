import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter/Counter.component';
import CountButton from './components/CountButton/CountButton.component';

class App extends Component {
  state = {
    count: 0
  };

  countButtonClickHandler = (isAdd) => () => {
    let tmpCount = this.state.count;
    if(isAdd) {
      tmpCount++;
    }
    else {
      tmpCount--;
    }
    
    const newState = {
      count: tmpCount
    };
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Counter text={this.state.count}/>
        <CountButton isAdd={true} countButtonClickHandler={this.countButtonClickHandler} />
        <CountButton isAdd={false} countButtonClickHandler={this.countButtonClickHandler} />
      </div>
    );
  }
}

export default App;
