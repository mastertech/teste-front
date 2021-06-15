import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import UserProfile from '../src/pages/UserProfile';

describe('snapshot testing', () => {
  test('snapshot for UserProfile component', () => {
    const renderedComponent = renderer.create(<UserProfile />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
