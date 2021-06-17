import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import TextInput from './index';

it('Should renders all correctly', () => {
  const { getByText, getByPlaceholderText } = render(
    <TextInput label="email" placeholder="seu email" />,
  );

  expect(getByText(/email/i)).toBeInTheDocument();
  expect(getByPlaceholderText('seu email')).toBeTruthy();
});

it('Should perform the text change', () => {
  const handleValueChange = jest.fn();
  const value = 'edson@example.com';
  const { getByRole, getByText } = render(
    <TextInput
      label="email"
      placeholder="seu email"
      onChange={handleValueChange}
    />,
  );

  const input = getByRole('textbox');

  expect(getByText(/email/i)).toBeInTheDocument();

  expect(handleValueChange).toHaveBeenCalledTimes(0);

  userEvent.type(input, value);

  expect(input).toHaveValue(value);
  expect(handleValueChange).toHaveBeenCalledTimes(value.length);
});
