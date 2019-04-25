/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import Switch from '../Switch';
import Modal from '../Modal';

import eyeSvg from './icons/eye.svg';
import bellSvg from './icons/bell.svg';
import clockSvg from './icons/clock.svg';
import glassesSvg from './icons/glasses.svg';
import boxSvg from './icons/boxes.svg';
import sunSvg from './icons/sun.svg';
import mindSvg from './icons/mind.svg';

import styles from './styles.module.scss';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handleView() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick() {
    let invertActive;
    const { active } = this.state;
    if (active === 0) {
      invertActive = 1;
    } else {
      invertActive = 0;
    }
    this.setState({
      active: invertActive,
    });
  }

  render() {
    const {
      number, icon, practice, todoType, time, text, content,
    } = this.props;

    const { active, isOpen } = this.state;
    let iconSvg;

    if (icon === 'sun') {
      iconSvg = sunSvg;
    } else if (icon === 'boxes') {
      iconSvg = boxSvg;
    } else {
      iconSvg = mindSvg;
    }

    return (
      <div className={styles.todoContainer} active={active}>
        <h1 className={styles.number}>{number}</h1>
        <div className={styles.block}>
          <div className={styles.icon}>
            <ReactSVG src={iconSvg} />
          </div>
          <div className={styles.content}>
            <div className={styles.infoBar}>
              <span>{practice}</span>
              <div className={styles.svgAndText}>
                <ReactSVG src={glassesSvg} element="span" />
                <p>{todoType}</p>
              </div>
              <div className={styles.svgAndText}>
                <ReactSVG src={clockSvg} element="span" />
                <p>{time}</p>
              </div>
            </div>
            <p className={styles.text}>{text}</p>
            <div className={styles.buttons}>
              <div className={styles.svgAndText}>
                <ReactSVG src={eyeSvg} element="span" />
                <p className={styles.orange} onClick={this.handleView}>Просмотреть</p>
              </div>
              <div className={styles.svgAndText}>
                <ReactSVG src={bellSvg} element="span" />
                <p>Напомнить</p>
              </div>
            </div>
          </div>
          <div className={styles.switch} onClick={this.handleClick}>
            <Switch active={active} />
          </div>
        </div>
        <Modal
          show={isOpen}
          onClose={this.handleView}
        >
          {content}
        </Modal>
      </div>
    );
  }
}

export default Todo;
