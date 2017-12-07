import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const myThis = props;
  return <h1 style={myThis.style}>{myThis.count}</h1>;
};

Counter.propTypes = {
  text: PropTypes.number.isRequired
};

Counter.defaultProps = {
  text: 0
};

export default Counter;
