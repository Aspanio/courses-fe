import React from 'react';
import Checkbox from '../Checkbox';
import styles from './styles.module.scss';

export default function Task(props) {
  const { number, text } = props;

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <h1 className={styles.number}>{number}</h1>
        <p>{text}</p>
      </div>
      <Checkbox />
    </div>
  );
}
