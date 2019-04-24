import React from 'react';
import { connect } from 'react-redux';
import Todo from '../Todo';
import styles from './styles.module.scss';

function Todos(props) {
  const { todos } = props;
  let count = 0;
  const mapTodos = todos.map((el) => {
    count += 1;
    return <Todo key={count} time={el.time} number={count} icon={el.icon} practice={el.practice} todoType={el.todoType} text={el.text} />;
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
