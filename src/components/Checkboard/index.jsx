import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../ListItem';
import styles from './styles.module.scss';

function Checkboard(props) {
  const { lists, dangers } = props;

  const mapList = lists.map((el) => {
    const { list } = el;
    const tasks = list.map(element => <ListItem text={element.text} />);
    return <div><h1 className={styles.header}>{el.header}</h1>{tasks}</div>;
  });

  const mapDangers = dangers.map((el) => {
    const { list } = el;
    const tasks = list.map(element => <ListItem text={element.text}  orange="1"/>);
    return <div className={styles.danger}><ListItem text={el.danger} danger /><h1 className={styles.header} danger="1">{el.header}</h1>{tasks}</div>;
  });

  return (
    <div>
      <div>{mapList}</div>
      <div>{mapDangers}</div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    lists: state.fetchListItems,
    dangers: state.fetchDangers,
  };
}

export default connect(mapStateToProps)(Checkboard);
