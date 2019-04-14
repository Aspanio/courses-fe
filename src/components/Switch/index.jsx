import React from 'react';
import styles from './styles.module.scss';

function Switch(props) {
  const { active } = props;

  return (
    <div className={styles.switch} active={active}>
      <div className={styles.button} />
      <div className={styles.line} />
    </div>
  );
}

export default Switch;
