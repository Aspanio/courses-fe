import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    const burger = isOpen
      ? (
        <div className={styles.burgerActive}>
          <div className={styles.links}>
            <Link to="/" onClick={this.handleClick}>Главная</Link>
            <a href="#1" onClick={this.handleClick}>Материалы для вас</a>
          </div>
          <div className={styles.close} onClick={this.handleClick}>x</div>
        </div>
      ) : (
        <div className={styles.blockContainer} onClick={this.handleClick}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.shortLine} />
        </div>
      );
    return (
      <div>
        {burger}
      </div>
    );
  }
}
