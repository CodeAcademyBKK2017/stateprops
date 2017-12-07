import React from 'react';
import Counter from '../Counter.component';
import renderer from 'react-test-renderer';

test('CountStatus Snapshot Test',() => {
  let valueData = 0;
  const tree = renderer.create(<Counter >{valueData}</Counter>);
  expect(tree).toMatchSnapshot();
});
