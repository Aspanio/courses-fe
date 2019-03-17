import React from 'react';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer>
      <div className={styles.content}>
        <div className={styles.footerBlock}>
          <h1>Онлайн-школа</h1>
          <div className={styles.line} />
          <ul>
            <li><a href="#1">О школе</a></li>
            <li><a href="#1">О авторе</a></li>
            <li><a href="#1">Вопрос/Ответ</a></li>
            <li><a href="#1">Отзывы</a></li>
          </ul>
        </div>
        <div className={styles.footerBlock}>
          <h1>Материалы</h1>
          <div className={styles.line} />
          <ul>
            <li><a href="#1">Мои курсы</a></li>
            <li><a href="#1">Бесплатные курсы</a></li>
            <li><a href="#1">Все о детях</a></li>
            <li><a href="#1">О личности</a></li>
            <li><a href="#1">О семье</a></li>
            <li><a href="#1">Ближайшие курсы</a></li>
            <li><a href="#1">Новинки</a></li>
          </ul>
        </div>
        <div className={styles.footerBlock}>
          <h1>Информация</h1>
          <div className={styles.line} />
          <ul>
            <li><a href="#1">Способы оплаты</a></li>
            <li><a href="#1">Политика конфиденцальности</a></li>
            <li><a href="#1">Договор оферты</a></li>
          </ul>
        </div>
        <div className={styles.footerBlock}>
          <h1>Контакты</h1>
          <div className={styles.line} />
          <ul>
            <li><a href="#1">+38(044)35 36 036</a></li>
            <li><a href="#1">+7(495)504 36 06</a></li>
            <li><a href="#1">info@karpachoff.com</a></li>
            <li><a href="#1">school.karpachoff.com</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
}


