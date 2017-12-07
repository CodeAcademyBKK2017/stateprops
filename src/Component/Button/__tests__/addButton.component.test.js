import React from 'react';
import addButton from '../addButton.component';
import renderer from 'react-test-renderer';

test('addButton Snapshot Test',() => {
  let text = 'Add';
  const tree = renderer.create(<addButton onClick={jest.fn()}>{text}</addButton>);
  expect(tree).toMatchSnapshot();
});
