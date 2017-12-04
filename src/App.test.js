import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  it('Overlay: renders correctly', () => {
    const tree = renderer.create(< App / >).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('add: should increament state', () => {
    const wrapper = shallow(< App / >);
    const instance = wrapper.instance();
    expect(instance.state.counter).toBe(0);
    instance.add();
    expect(instance.state.counter).toBe(1);
  });
});