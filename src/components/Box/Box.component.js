import React, {Component} from 'react';
import './Box.style.css';
class Box extends Component {
    clickevent= () => this.props.event
    render () {
    	return (
    		<div className={this.props.type} onClick={this.clickevent()}>{this.props.name}</div>
    	);   
    }
}
export default Box;