import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const Subtract = (props) => {
  const myThis = props;
  return <button className="ButtonSubtract" onClick={myThis.subtractValue}>{myThis.textValue}</button>;
};

Subtract.propTypes = {
  onClick: PropTypes.func.isRequired,
  textValue: PropTypes.string.isRequired
};

Subtract.defaultProps = {
  onClick: noop,
  textValue: ''
};

export default Subtract;
