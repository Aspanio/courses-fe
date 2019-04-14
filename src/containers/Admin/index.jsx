/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import CreateModule from '../../components/CreateModule';
import CreateTask from '../../components/CreateTask';
import CreateChecklist from '../../components/CreateChecklist';
import CreateDangerChecklist from '../../components/CreateDangerChecklist';
import CreateAttentionBlock from '../../components/CreateAttentionBlock';
import styles from './styles.module.scss';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'Module',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data) {
    this.setState({
      activeLink: data,
    });
    console.log(this.state.activeLink)
  }

  render() {
    let active;
    const { activeLink } = this.state;
    switch (activeLink) {
    case 'Module':
      active = <CreateModule />;
      break;
    case 'Task':
      active = <CreateTask />;
      break;
    case 'Checklist':
      active = <CreateChecklist />;
      break;
    case 'Dangerlist':
      active = <CreateDangerChecklist />;
      break;
    case 'Attention':
      active = <CreateAttentionBlock />;
      break;
    default:
      active = <CreateModule />;
      break;
    }
    return (
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.left}>
            <a onClick={() => this.handleClick('Module')}>Добавление модуля</a>
            <a onClick={() => this.handleClick('Task')}>Добавление задания</a>
            <a onClick={() => this.handleClick('Checklist')}>Добавление чеклиста</a>
            <a onClick={() => this.handleClick('Dangerlist')}>Добавление опасного чеклиста</a>
            <a onClick={() => this.handleClick('Attention')}>Добавление блока обратить внимание</a>
          </div>
          <div className={styles.right}>
            {active}
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
