import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { handler,type } = this.props;

    return (
      <button className={`btn btn-${type}`} onClick={handler()}>{this.props.title}</button>
    );
  }
}

export default Button;