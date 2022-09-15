import React from 'react';
import renderer from 'react-test-renderer';
import MyCalculator from '../components/Calculator';

describe('Check if Calculator is rendering', () => {
  test('Renders correctly', () => {
    const tree = renderer.create(<MyCalculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
