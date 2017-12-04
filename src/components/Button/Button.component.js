import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
  render () {
    const {handler,type} = this.props;

    return (
      <div className={`btn btn-${type}`} onClick={handler}>{this.props.title}</div>
    );
  }
}

export default Button;