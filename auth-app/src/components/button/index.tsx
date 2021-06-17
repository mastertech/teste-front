import React, { HTMLAttributes } from 'react';

import styles from './button.module.scss';

type Props = {
  isLoading?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, isLoading = false, ...rest }) => {
  return (
    <button
      type="submit"
      className={`${styles.btnContainer} ${isLoading && styles.spinner}`}
      disabled={isLoading}
      {...rest}
    >
      {!isLoading && <span>{children}</span>}
    </button>
  );
};

export default Button;
