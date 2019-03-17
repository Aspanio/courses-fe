import React from 'react';
import { connect } from 'react-redux';
import Task from '../Task';

import styles from './styles.module.scss';

function Tasks(props) {
  const { payload } = props;
  console.log(payload);
  const tasks = payload.map(el => <Task number={el} text={el[el]} />);
  return (
    { tasks }
  );
}

function mapStateToProps(state) {
  return {
    payload: state.fetchTasks,
  };
}

export default connect(mapStateToProps)(Tasks);
