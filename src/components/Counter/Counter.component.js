import React from 'react';
import Button from '../Button/Button.component';
// import 'bootstrap/dist/css/bootstrap.css';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Container,
//   Row,
//   Col,
//   Jumbotron,
//   Button
// } from 'reactstrap';
// import {
//   Container,
//   Row,
//   Col
// } from 'reactstrap';
import './Counter.style.css';

class Counter extends React.Component {
  state = {
    data: 0
  }
  // addFn = () => {
  //   this.setState({data: this.state.data + 1});
  // }
  // subtractFn = () => {
  //   this.setState({data: this.state.data - 1});
  // }
  addFn = () => this.setState({data: this.state.data + 1});
  
  subtractFn = () => this.setState({data: this.state.data - 1});

  render () {
    // return (
    //   <div>
    //     <div style={{textAlign: 'center'}}>
    //       <input className="Counter-box" type="text" value={this.state.data} />
    //     </div>
    //     <div style={{textAlign: 'center', marginTop: '90px'}}>
    //       <button className="Counter-button Counter-button--yellow" onClick={this.addFn}>ADD</button>
    //       <button className="Counter-button Counter-button--green" onClick={this.subtractFn}>SUBTRACT</button>
    //     </div>
    //   </div>
    // );
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <input className="Counter-box" type="text" value={this.state.data} />
        </div>
        <div style={{textAlign: 'center', marginTop: '90px'}}>
          <Button type="ADD" handler={this.addFn} />
          <Button type="SUBTRACT" handler={this.subtractFn} />
        </div>
      </div>
    );
  }
}

export default Counter;
