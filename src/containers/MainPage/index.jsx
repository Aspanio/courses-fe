import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainScreen from '../../components/MainScreen';
import NavInfo from '../../components/NavInfo';
import FilterBar from '../../components/FilterBar';
import ThemesBlock from '../../components/ThemesBlock';
import styles from './styles.module.scss';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isLoading, payload } = this.props;
    console.log(payload, isLoading);

    if (isLoading) {
      return (
        <div className={styles.bg}><div className={styles.spinner} /></div>
      );
    }
    return (
      <div>
        <MainScreen />
        <NavInfo />
        <FilterBar />
        <ThemesBlock />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    // fetchCourseModules: () => dispatch(fetchModules()),
  };
}

export default connect(null, null)(MainPage);

