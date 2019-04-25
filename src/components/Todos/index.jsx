import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Todo from '../Todo';
import styles from './styles.module.scss';

function Todos(props) {
  const { elements } = props;
  console.log(elements);
  let count = 0;
  const mapTodos = elements.map((el) => {
    count += 1;
    return <Todo key={count} time={el.duration} number={count} icon={el.img} practice={el.practice} todoType={el.type} text={el.header} content={el.view} />;
  });
  return (
    <div className={styles.todoContainer}>
      {mapTodos}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.fetchTodos,
  };
}

export default connect(mapStateToProps)(Todos);
