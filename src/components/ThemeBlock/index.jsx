import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import ProgressBar from '../ProgressBar';
import babySVG from './baby.svg';

class ThemeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      themeName,
      milestone,
      text,
      date,
      number,
      percent,
      id,
    } = this.props;

    const percentage = `${percent()}%`;

    const linkStyle = {
      textDecoration: 'none',
    };

    const valid = date || 'Доступно';

    return (
      <Link to={`/module/${id}`} style={linkStyle}>
        <div className={styles.block}>
          <h1 className={styles.number}>{number}</h1>
          <div className={styles.content}>
            <h1>{themeName}</h1>
            <h3><ReactSVG src={babySVG} wrapper="span" />{milestone}</h3>
            <p>{text}</p>
            {valid === date ? <h2>Будет доступно <span>${date}</span></h2> : <h2>Доступно</h2> }
          </div>
          <div className={styles.bar}>
            <h6>{percentage}</h6>
            <div className={styles.progressBar}>{window.innerWidth < 550 ? <ProgressBar /> : <ProgressBar vert />}</div>
          </div>
        </div>
      </Link>
    );
  }
}

function mapStateToProps(state) {
  return {
    percent: state.fetchProgress.progress,
  };
}

ThemeBlock.propTypes = {
  themeName: PropTypes.string.isRequired,
  milestone: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  percent: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ThemeBlock);
