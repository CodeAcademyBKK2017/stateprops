import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  add = () => {
    this.setState({count: this.state.count + 1});
  }
  subtract = () => {
    this.setState({count: this.state.count - 1});
  }
  state = {
    count: 0
  };

  render () {
    return (
      <div className="App">
        <input type="text" value={this.state.count} /> 
        <button onClick={this.add}>ADD</button> <button onClick={this.subtract}>SUBTRACT</button>
      </div>
    );
  }
}


App.propTypes = {
  test: PropTypes.string
};
App.defaultProps = {
};

export default App;
