import React, { HTMLAttributes, useState } from 'react';

import styles from './text-input.module.scss';

type Props = {
  label?: string;
  type?: 'text' | 'email' | 'password';
} & HTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<Props> = ({ type, label, ...rest }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <span className={styles.label}>{label}</span>
      <div
        className={`${styles.inputContainer} ${
          focused ? styles.focusedInput : undefined
        }`}
      >
        <input
          {...rest}
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    </div>
  );
};

export default TextInput;
