/* eslint-disable semi */
import React, { Component } from 'react';
import styles from './styles.module.scss';
import Recommendation from '../Recommendation';
import swimSvg from './icons/swim.svg';
import sleepSvg from './icons/sleep.svg';
import hospitalSvg from './icons/hospital.svg';

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;

    const mapRec = data.map((el) => {
      let icon;
      switch (el.img) {
      case 'swim':
        icon = swimSvg;
        break;
      case 'hospital':
        icon = hospitalSvg;
        break;
      case 'sleep':
        icon = sleepSvg;
        break;
      default:
        icon = undefined;
        break;
      }
      return <Recommendation header={el.header} key={el.id} icon={icon} content='Почини!' />
    })
    return (
      <div className={styles.recommendContainer}>
        {mapRec}
      </div>
    );
  }
}

export default Recommendations;
