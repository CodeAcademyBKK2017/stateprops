import React from 'react';
import subtractButton from '../subtractButton.component';
import renderer from 'react-test-renderer';

test('subtractButton Snapshot Test',() => {
  let text = 'Subtract';
  const tree = renderer.create(<subtractButton onClick={jest.fn()}>{text}</subtractButton>);
  expect(tree).toMatchSnapshot();
});