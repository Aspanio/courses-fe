/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import usermock from './usermock.png';
import RenderNewField from '../../components/RenderNewField';
import styles from './styles.module.scss';


function Child() {
  return (
    <div className={styles.child}>
      <h2>Имя ребенка</h2>
      <img src={usermock} alt="Фото ребенка" />
      <p>Возраст</p>
    </div>
  );
}

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'User',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(click) {
    this.setState({
      active: click,
    });
  }

  render() {
    let page;
    switch (this.state.active) {
    case 'Notifications':
      page = (
        <div>
          <h2>У вас <span>2 напоминания</span></h2>
          <div className={styles.line}>
            <a href=''>Сделать то-то то-то</a>
          </div>
        </div>
      );
      break;
    case 'Settings':
      page = (
        <div>
          <form action="/" method="POST">
            <h2>Добавить интересы</h2>
            <RenderNewField element={(
              <select name="interest">
                <option value="children">Дети</option>
              </select>
            )}
            />
            <button type="submit">Добавить интересы</button>
          </form>
          <hr />
          <form action="/" method="POST">
            <h2>Смена фото</h2>
            <input type="file" name="img" />
            <button type="submit">Изменить фото</button>
          </form>
          <hr />
          <form action="/" method="POST">
            <h2>Изменить пароль</h2>
            <input type="password" placeholder="Текущий пароль" name="currentPwd" />
            <input type="password" placeholder="Новый пароль" name="newPwd" />
            <button type="submit">Изменить пароль</button>
          </form>
          <hr />
          <form action="/" method="POST">
            <h2>Добавить детей</h2>
            <input type="file" name="file" id="file" alt="Ребенок" />
            <label htmlFor="file">Выберете файл</label>
            <input type="text" placeholder="Имя ребенка" name="name" />
            <input type="date" name="dob" />
            <button type="submit">Добавить ребенка</button>
          </form>
        </div>
      );
      break;
    case 'User':
      page = (
        <div>
          <div className={styles.user}>
            <img src={usermock} alt="Фото профиля" />
            <div className={styles.userDesc}>
              <h2>Дональд Трамп,<span>32 года</span></h2>
              <h3>Интересы</h3>
              <ul>
                <li>Саморазвитие</li>
                <li>Воспитание</li>
              </ul>
            </div>
          </div>
          <h3>Дети</h3>
          <Child />
        </div>
      );
      break;
    default:
      page = (
        <div>
          <div className={styles.user}>
            <img src={usermock} alt="Фото профиля" />
            <div className={styles.userDesc}>
              <h2>Дональд Трамп,<span>32 года</span></h2>
              <h3>Интересы</h3>
              <ul>
                <li>Саморазвитие</li>
                <li>Воспитание</li>
              </ul>
            </div>
          </div>
          <h3>Дети</h3>
          <Child />
        </div>
      );
    }
    return (
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.page}>
            <aside>
              <div>
                <img src={usermock} alt="Вы.." />
                <h1>Дональд Трамп</h1>
              </div>
              <nav>
                <p onClick={() => this.handleClick('User')}>Мой профиль</p>
                <p onClick={() => this.handleClick('Notifications')}>Напоминания <span /></p>
                <p onClick={() => this.handleClick('Courses')}>Мои курсы</p>
                <p onClick={() => this.handleClick('Settings')}>Настройки</p>
              </nav>
            </aside>
            <main>
              {page}
            </main>
          </div>
        </div>
      </div>
    );
  }
}
