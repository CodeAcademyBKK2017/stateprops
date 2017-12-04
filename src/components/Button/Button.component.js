import React, {Component} from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import './Button.css';

class Button extends Component {
  render () {
    const {handler,type} = this.props;

    return (
      <div className={`btn btn-${type}`} onClick={handler}>{this.props.title}</div>
    );
  }
}
Button.propTypes = {
  type: PropTypes.oneOf(['add','subtract']).isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  onClick: noop
};
export default Button;