import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { vert } = this.props;

    return (
      <div className={vert ? styles.verContainer : styles.parentContainer}>
        <div className={vert ? styles.verProgress : styles.progress} />
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  vert: false,
};

ProgressBar.propTypes = {
  vert: PropTypes.bool,
};

export default ProgressBar;
