import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../ListItem';
import styles from './styles.module.scss';

function Checkboard(props) {
  const { lists, dangers } = props;

  const mapList = lists.map((el) => {
    const { list } = el;
    const tasks = list.map(element => <ListItem key={Math.floor((Math.random() * 10000) + 2)} text={element.text} />);
    return <div key={Math.floor((Math.random() * 10000) + 1)}><h1 className={styles.header}>{el.header}</h1>{tasks}</div>;
  });

  const mapDangers = dangers.map((el) => {
    const { list } = el;
    const tasks = list.map(element => <ListItem key={Math.floor((Math.random() * 10000) + 3)} text={element.text} orange="1" />);
    return <div className={styles.danger} key={Math.floor((Math.random() * 10000) + 4)}><ListItem text={el.danger} danger /><h1 className={styles.header} danger="1">{el.header}</h1>{tasks}</div>;
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
