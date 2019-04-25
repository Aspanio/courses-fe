import React, { Component } from 'react';
import ReactDropdown from 'react-dropdown';
// import { connect } from 'react-redux';

import 'react-dropdown/style.css';
import styles from './styles.module.scss';


class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // make redux
    const options = [
      'lorem', 'ipsum', 'dolor',
    ];
    const defaultOption = 'Возраст ребенка';
    return (
      <div className={styles.filterContainer}>
        <div className={styles.filterContent}>
          <div className={styles.leftBar}>
            <div className={styles.line} />
            <h4>Темы курса</h4>
          </div>
          <ReactDropdown
            controlClassName={styles.dropDown}
            menuClassName={styles.menu}
            options={options}
            value={defaultOption}
          />
        </div>
      </div>
    );
  }
}

export default FilterBar;
