import { render, screen } from '@testing-library/react';
import React from 'react';

import ProfilePage from './index';

test('renders profile title', () => {
  render(<ProfilePage />);
  const linkElement = screen.getByText(/profile/i);
  expect(linkElement).toBeInTheDocument();
});
