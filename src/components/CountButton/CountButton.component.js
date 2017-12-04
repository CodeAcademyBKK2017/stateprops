import React, {Component} from 'react';
import './CountButton.style.css';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

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

CountButton.propTypes = {
	isAdd: PropTypes.bool.isRequired,
	countButtonClickHandler: PropTypes.func.isRequired
};

CountButton.defaultProps = {
	isAdd: true,
	countButtonClickHandler: noop
};

export default CountButton;
