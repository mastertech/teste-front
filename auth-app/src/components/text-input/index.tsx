import React, { HTMLAttributes, useState } from 'react';

import styles from './text-input.module.scss';

type Props = {
  isPasswordField?: boolean;
  error?: string;
  label?: string;
  
  type: 'text' | 'email' | 'password';
} & HTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<Props> = ({ type, isPasswordField, ...rest }) => {
  const [secureText, setSecureText] = useState(type === 'password');

  return (
    <div className={`${styles.inputContainer}`}>
      <input {...rest} />
    </div>
  );
};

export default TextInput;
