import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

test('match home snapshot', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
