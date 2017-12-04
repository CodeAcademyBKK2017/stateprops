import React, {Component} from 'react';
import './App.css';
import Counter from './components/Counter/Counter.component';
import CountButton from './components/CountButton/CountButton.component';

class App extends Component {
  
	constructor (props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	countButtonClickHandler = (isAdd) => () => {
		let tmpCount = this.state.count;
		if (isAdd) {
			tmpCount++;
		} else {
			tmpCount--;
		}

		const newState = {
			count: tmpCount
		};
		this.setState(newState);
	}

	render () {
		return (
			<div className="App">
				<div style={{display: 'inline-block'}}>
					<div style={{display: 'table-row'}}>
						<div style={{display: 'table-cell'}}/>
						<Counter text={this.state.count} style={{display: 'table-cell'}}/>
						<div style={{display: 'table-cell'}}/>
					</div>

					<div style={{display: 'table-row', height: '80px'}}>
		
					</div>

					<div style={{display: 'table-row'}}>
						<CountButton isAdd={true} countButtonClickHandler={this.countButtonClickHandler} style={{display: 'table-cell'}}/>
						<div style={{display: 'table-cell'}}/>
						<CountButton isAdd={false} countButtonClickHandler={this.countButtonClickHandler} style={{display: 'table-cell'}}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
