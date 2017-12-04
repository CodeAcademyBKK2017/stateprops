import React, {Component} from 'react';
import './CountButton.style.css';

class CountButton extends Component {
	render () {
		const {isAdd, countButtonClickHandler} = this.props;
		const title = isAdd ? 'Add' : 'Subtract';
		let newClassName = 'CountButton';
		if (isAdd) {
			newClassName += ' AddButton';
		} else {
			newClassName += ' SubtractButton';
		}

		return (
			<button className={newClassName} onClick={countButtonClickHandler(isAdd)}>
				{title}
			</button>
		);
	}
}

export default CountButton;
