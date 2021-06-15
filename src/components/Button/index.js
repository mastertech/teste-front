import React from 'react';

import styles from './styles.module.scss';

export default function Button({ title, onClick }) {
  return (
    <div className={styles.buttonContainer}>
      <button type="submit" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
