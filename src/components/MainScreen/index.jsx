import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchModules } from '../../actions/moduleActions';
import Button from '../Button';
import ProgressBar from '../ProgressBar';
import karpachoff from './karpachoff.png';
import styles from './styles.module.scss';


class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchModules();
  };

  render() {
    const { themesCount, themesDone } = this.props;
    return (
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>академия родительского мастерства</h1>
            <h2>дмитрия карпачева</h2>
            <div className={styles.buttonContainer}>
              <Button text="Подробнее о курсе" />
            </div>
            <ProgressBar className={styles.bar} />
            <div className={styles.infoProgress}>
              <div className={styles.info}>
                <h1>{themesCount}</h1>
                <p>Тем <br /> всего</p>
              </div>
              <div className={styles.info}>
                <h1>{themesDone}</h1>
                <p>Тем <br /> выполнено</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MainScreen.propTypes = {
  themesCount: PropTypes.number.isRequired,
  themesDone: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    themesCount: state.fetchProgress.themes,
    themesDone: state.fetchProgress.themesDone,
  };
}

export default connect(mapStateToProps, { fetchModules })(MainScreen);
