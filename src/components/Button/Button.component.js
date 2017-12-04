import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
  render () {
    const {type} = this.props;

    return (
      <div className={`btn btn-${type}`}>{this.props.children}</div>
    );
  }
}

export default Button;