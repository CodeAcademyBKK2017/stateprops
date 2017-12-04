import React, {Component} from 'react';
import './Counter.style.css';

class Counter extends Component {
	render () {
		const {text} = this.props;

		return (
			<div className="Counter">
				{text}
			</div>
		);
	}
}

export default Counter;
