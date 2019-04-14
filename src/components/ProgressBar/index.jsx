import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.module.scss';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { vert, percentage } = this.props;
    let percentStyle = percentage();
    percentStyle += '%';

    return (
      <div className={vert ? styles.verContainer : styles.parentContainer}>
        <div className={vert ? styles.verProgress : styles.progress} style={vert ? { height: percentStyle } : { width: percentStyle }} />
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  vert: false,
};

ProgressBar.propTypes = {
  vert: PropTypes.bool,
  percentage: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    percentage: state.fetchProgress.progress,
  };
}

export default connect(mapStateToProps)(ProgressBar);
