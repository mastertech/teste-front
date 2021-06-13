import React from 'react';
import Login from '../../pages/Login';
import renderer from 'react-test-renderer';

describe('Login page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
