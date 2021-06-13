import React from 'react';
import { ButtonHTMLAttributes } from "react";
import './styles.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <button className='button' {...rest}>
    {loading ? 'Aguarde...' : children}
  </button>
);

export default Button;
