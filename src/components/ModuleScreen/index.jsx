import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchModules } from '../../actions/moduleActions';
import ProgressBar from '../ProgressBar';
import styles from './styles.module.scss';

class ModuleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchModules();
  }

  render() {
    const { themes, themesDone } = this.props;

    return (
      <div className={styles.moduleScreenBg}>
        <div className={styles.moduleScreenContainer}>
          <div className={styles.content}>
            <h1 className={styles.moduleName}>1-й год, 3-й месяц</h1>
            <p>{this.props.desc}</p>
            <ProgressBar />
            <div className={styles.themesInfo}>
              <div className={styles.themes}>
                <h1>{themes}</h1>
                <p>Тем<br />всего</p>
              </div>
              <div className={styles.themesDone}>
                <h1>{themesDone}</h1>
                <p>Тем<br />выполнено</p>
              </div>
            </div>
            <h2>{this.props.header}</h2>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    themes: state.fetchProgress.themes,
    themesDone: state.fetchProgress.themesDone,
  };
}

export default connect(mapStateToProps, { fetchModules })(ModuleScreen);
