import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const Add = (props) => { 
  const myThis = props;
  return <button className="ButtonAdd" onClick={myThis.addValue}>{myThis.textValue}</button>;
};

Add.propTypes = {
  addValue: PropTypes.func.isRequired,
  textValue: PropTypes.string.isRequired
};

Add.defaultProps = {
  addValue: noop,
  textValue: ''
};

export default Add;
