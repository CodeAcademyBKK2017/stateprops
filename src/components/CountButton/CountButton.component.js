import React, { Component } from 'react';

class CountButton extends Component {
	render() {
		const {isAdd, countButtonClickHandler} = this.props;
		const title = isAdd ? "Add" : "Subtract";

		return (
			<button onClick={countButtonClickHandler(isAdd)}>
				{title}
			</button>
		);
	}
}

export default CountButton;
