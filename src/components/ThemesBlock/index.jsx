/* eslint-disable no-const-assign */
import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getModules } from '../../actions/courseAction';
import ThemeBlock from '../ThemeBlock';
import styles from './styles.module.scss';

class ThemesBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getListModules } = this.props;
    getListModules();
  }

  render() {
    const { payload } = this.props;
    console.log(payload);
    let index = 0;
    let number;
    const test = payload.map((data) => {
      console.log(data)
      index += 1;
      if (index < 10) {
        number = `0${index}`;
      } else {
        number = `${index}`;
      }
      return <ThemeBlock key={data._id} themeName={data.name} text={data.shortDesc.desc} milestone={`от ${data.shortDesc.years} л. ${data.shortDesc.months} м.`} date={data.date ? data.date : null} number={number} id={data._id} />;
    });

    return (
      <div className={styles.themesContainer}>
        {test}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payload: state.courseReducer.payload,
});

const mapDispatchToProps = dispatch => ({
  getListModules: () => dispatch(getModules()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemesBlock);
