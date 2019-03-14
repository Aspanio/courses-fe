import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';
import styles from './styles.module.scss';

export default class ModuleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.moduleScreenBg}>
        <div className={styles.moduleScreenContainer}>
          <div className={styles.content}>
            <h1 className={styles.moduleName}>1-й год, 3-й месяц</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet omnis, repellat odio illo
                ullam quia libero vero deserunt nulla consequuntur! Labore dolor, sapiente incidunt
            </p>
            <ProgressBar />
            <div className={styles.themesInfo}>
              <div className={styles.themes}>
                <h1>10</h1>
                <p>Тем<br />всего</p>
              </div>
              <div className={styles.themesDone}>
                <h1>6</h1>
                <p>Тем<br />выполнено</p>
              </div>
            </div>
            <h2>Название актуальной темы</h2>
          </div>
        </div>
      </div>
    );
  }
}
