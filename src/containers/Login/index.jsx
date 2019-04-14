import React from 'react';
import styles from './styles.module.scss';

export default function Login() {
  return (
    <div className={styles.bg}>
      <div className={styles.form}>
        <form action="POST">
          <input type="email" name="email" placeholder="E-mail" />
          <input type="password" name="pwd" placeholder="Пароль" />
          <input type="button" value="Войти" />
          <a href="/#">Забыли пароль?</a>
          <div>
            <a href="www.facebook.com">fb</a>
            <a href="www.google.com">Google</a>
          </div>
        </form>
      </div>
    </div>
  );
}
