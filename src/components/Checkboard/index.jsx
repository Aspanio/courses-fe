import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../ListItem';
import styles from './styles.module.scss';

function Checkboard(props) {
  const { checklist, dangerlist, dangerlist_header } = props;

  const mapList = checklist.map((el) => {
    const tasks = el.text.map(element => <ListItem key={Math.floor((Math.random() * 10000) + 2)} text={element} />);
    return <div key={Math.floor((Math.random() * 10000) + 1)}><h1 className={styles.header}>{el.header}</h1>{tasks}</div>;
  });

  const mapDangers = dangerlist.map((el) => {
    const tasks = el.text.map(element => <ListItem key={Math.floor((Math.random() * 10000) + 2)} text={element} />);
    return <div key={Math.floor((Math.random() * 10000) + 4)}><h1 className={styles.header} danger="1">{el.header}</h1>{tasks}</div>;
  });

  return (
    <div>
      <div>{mapList}</div>
      <ListItem text={dangerlist_header} danger />
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
