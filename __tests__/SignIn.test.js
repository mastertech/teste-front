import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SignIn from '../src/pages/SignIn';

describe('snapshot testing', () => {
  test('snapshot for SignIn component', () => {
    const renderedComponent = renderer.create(<SignIn />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
