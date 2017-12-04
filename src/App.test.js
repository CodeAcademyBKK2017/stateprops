import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme, {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

describe('App', () => {
	it('Overlay: renders correctly', () => {
		const tree = renderer.create(<App />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('add: should increment state', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		
		expect(instance.state.count).toBe(0);
		instance.countButtonClickHandler(true)();
		expect(instance.state.count).toBe(1);
	});

	it('subtract: should decrement state', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		
		expect(instance.state.count).toBe(0);
		instance.countButtonClickHandler(false)();
		expect(instance.state.count).toBe(1);
	});
});
