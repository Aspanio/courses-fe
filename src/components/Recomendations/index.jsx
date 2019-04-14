/* eslint-disable semi */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { recommendations } = this.props;

    const mapRec = recommendations.map((el) => {
      let icon;
      switch (el.icon) {
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
      return <Recommendation header={el.header} icon={icon} content={el.content} />
    })
    return (
      <div className={styles.recommendContainer}>
        {mapRec}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recommendations: state.fetchRecommendations }
}

export default connect(mapStateToProps)(Recommendations);
