import React from 'react';
import Dashboard from '../../pages/Dashboard';
import renderer from 'react-test-renderer';

describe('Dashboard page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Dashboard />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
