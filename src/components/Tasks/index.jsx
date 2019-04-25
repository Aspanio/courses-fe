import React, { Component } from 'react';
//  import PropTypes from 'prop-types';
import Task from '../Task';
import styles from './styles.module.scss';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    let counter = 0;
    const data = text.map((el) => {
      counter += 1;
      return <Task key={counter} number={counter} text={el} />;
    });

    return (
      <div className={styles.tasks}>
        {data}
      </div>
    );
  }
}

export default Tasks;
