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
});
  