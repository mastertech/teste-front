import React, { HTMLAttributes, useState } from 'react';

import styles from './text-input.module.scss';

type Props = {
  isPasswordField?: boolean;
  error?: string;
  label?: string;
  type?: 'text' | 'email' | 'password';
} & HTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<Props> = ({
  type = 'text',
  label,
  isPasswordField,
  ...rest
}) => {
  const [secureText, setSecureText] = useState(type === 'password');

  return (
    <>
      <p className={styles.label}>{label}</p>
      <div className={`${styles.inputContainer}`}>
        <input {...rest} />
      </div>
    </>
  );
};

export default TextInput;
