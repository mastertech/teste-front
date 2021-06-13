import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

describe('1 - Check the items on the screen', () => {
  it('should render the App component', () => {
    const { getByText } = renderWithRouter(<App />);
    const loginText = getByText(/Login/i);
    expect(loginText).toBeDefined();
  });
  it('input fields must be present', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const inputLogin = getByTestId('email');
    const inputPass = getByTestId('password');
    const btnLogin = getByTestId('btn-login');
    expect(inputLogin).toBeDefined();
    expect(inputPass).toBeDefined();
    expect(btnLogin).toBeDefined();
  });
});

describe('2 - Check error messages', () => {
  it('unfilled fields', async () => {
    renderWithRouter(<App />);
    const inputLogin = screen.getByTestId('email');
    const inputPass = screen.getByTestId('password');
    const btnLogin = screen.getByTestId('btn-login');
    userEvent.type(inputLogin, '');
    userEvent.type(inputPass, '');
    userEvent.click(btnLogin);

    await screen.findByText('Os campos email e senha não podem ser vazios!');
  });
  it('Email or password not match', async () => {
    renderWithRouter(<App />);
    const inputLogin = screen.getByTestId('email');
    const inputPass = screen.getByTestId('password');
    const btnLogin = screen.getByTestId('btn-login');
    userEvent.type(inputLogin, 'as');
    userEvent.type(inputPass, 'ss');
    userEvent.click(btnLogin);

    await screen.findByText('Email e/ou senha incorretos!');
  });
});
