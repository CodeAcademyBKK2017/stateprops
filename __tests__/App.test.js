import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import App from '../src/App';

describe('App', () => {
  it('Overlay: renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('add: should increment state', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();
    instance.oparate(true)();
    expect(instance.state.value).toEqual(1);
  });
});