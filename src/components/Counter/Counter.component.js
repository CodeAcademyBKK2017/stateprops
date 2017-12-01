import React, { Component } from 'react';

class Counter extends Component {
	render() {
		const {text} = this.props;

		return (
			<div>
				{text}
			</div>
		);
	}
}

export default Counter;
