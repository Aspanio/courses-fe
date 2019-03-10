import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ProgressBar from '../ProgressBar';
import karpachoff from './karpachoff.png';
import styles from './styles.module.scss';


class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
                {/* !!!!!!!!!!!!!!!!!!!!! */}
                <h1>{themesCount}</h1>
                <p>Тем <br /> всего</p>
              </div>
              <div className={styles.info}>
                {/* !!!!!!!!!!!!!!!!!!!!! */}
                <h1>{themesDone}</h1>
                <p>Тем <br /> выполнено</p>
              </div>
            </div>
          </div>
          <img src={karpachoff} alt="Loading.." />
        </div>
      </div>
    );
  }
}

export default MainScreen;

MainScreen.propTypes = {
  themesCount: PropTypes.number,
  themesDone: PropTypes.number,
};

MainScreen.defaultProps = {
  themesCount: 10,
  themesDone: 6,
};
