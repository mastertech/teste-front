import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button from './index';

it('Should renders the children correctly', () => {
  const { getByText } = render(<Button>test</Button>);

  expect(getByText(/test/i)).toBeInTheDocument();
});

it('Should perform the button click action', () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<Button onClick={handleClick}>test</Button>);

  expect(handleClick).toHaveBeenCalledTimes(0);

  fireEvent.click(getByRole('button'));

  expect(handleClick).toHaveBeenCalledTimes(1);

  fireEvent.click(getByRole('button'));

  expect(handleClick).toHaveBeenCalledTimes(2);
});

it('Should not renders the children & not perform click action (disabled) if it is Loading', () => {
  const handleClick = jest.fn();
  const label = 'test';
  const { queryByText, getByRole } = render(
    <Button isLoading onClick={handleClick}>
      {label}
    </Button>,
  );
  expect(queryByText(label)).toBeNull();

  expect(handleClick).toHaveBeenCalledTimes(0);

  fireEvent.click(getByRole('button'));

  expect(handleClick).toHaveBeenCalledTimes(0);
});
