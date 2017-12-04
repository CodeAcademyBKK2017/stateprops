import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {
  render () {
    return (
      <div className="box-result">
        <div className="counter">{this.props.children}</div>
      </div>
    );
  }
}

export default Counter;