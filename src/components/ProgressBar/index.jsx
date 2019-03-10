import React, { Component } from 'react';
import styles from './styles.module.scss';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.parentContainer}>
        <div className={styles.progress} />
      </div>
    );
  }
}

export default ProgressBar;
