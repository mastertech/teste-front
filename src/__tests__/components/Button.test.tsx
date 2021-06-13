import React from 'react';
import Button from '../../components/Button/index';
import renderer from 'react-test-renderer';


describe('Button component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
