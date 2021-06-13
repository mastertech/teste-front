import { render, screen } from '@testing-library/react';
import React from 'react';

import LoginPage from './index';

test('renders login title', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
