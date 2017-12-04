import React from 'react';
import renderer from 'react-test-renderer';
import  {shallow} from 'enzyme';
import App from './App';

describe('App component', () => {
  it('App: renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('add : should increment state',() => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();
    expect(instance.state.value).toBe(0);
    instance.add();
    expect(instance.state.value).toBe(1);
  });

  it('subtract : should decrease state',() => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();
    expect(instance.state.value).toBe(0);
    instance.subtract();
    expect(instance.state.value).toBe(-1);
  });
});