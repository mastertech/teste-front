import { render, screen } from '@testing-library/react';
import React from 'react';

import NotFoundPage from './index';

test('renders 404 title', () => {
  render(<NotFoundPage />);
  const linkElement = screen.getByText(/404!/i);
  expect(linkElement).toBeInTheDocument();
});
