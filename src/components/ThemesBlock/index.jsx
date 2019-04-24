/* eslint-disable no-const-assign */
import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchModulesBlocks } from '../../actions/moduleActions';
import ThemeBlock from '../ThemeBlock';
import styles from './styles.module.scss';

class ThemesBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchModulesBlocks();
  }

  render() {
    const { payload } = this.props;
    let index = 0;
    let number;
    const test = payload.map((data) => {
      index += 1;
      if (index < 10) {
        number = `0${index}`;
      } else {
        number = `${index}`;
      }
      return <ThemeBlock key={Math.floor((Math.random() * 10000) + 1)} themeName={data.themeName} text={data.text} milestone={data.milestone} date={data.date} number={number} />;
    });

    return (
      <div className={styles.themesContainer}>
        {test}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payload: state.fetchProgress.payload,
});

export default connect(mapStateToProps, { fetchModulesBlocks })(ThemesBlock);
