import React from 'react';
import styles from './styles.module.scss';
import Comment from '../Comment'

export default function index() {
  return (
    <div>
      <Comment />
      <Comment />
        <div className={styles.button}>
          <p>Задать свой вопрос</p>
        </div>
    </div>
  )
}
