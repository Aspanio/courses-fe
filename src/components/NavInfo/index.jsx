import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux'

class NavInfo extends Component {
//   static propTypes = {
//     prop: PropTypes,
//   }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      value1,
      value2,
      value3,
    } = this.props;

    return (
      <div className={styles.navInfoContainer}>
        <div className={styles.navInfoContent}>
          <h4><a href="#1">{value1}</a></h4>
          <div className={styles.line} />
          <h4><a href="#1">{value2}</a> </h4>
          <div className={styles.line} />
          <h4><a href="#1">{value3}</a> </h4>
        </div>
      </div>
    );
  }
}

NavInfo.defaultProps = {
  value1: 'Главная',
  value2: 'Курсы',
  value3: 'Состав Курса',
};

NavInfo.propTypes = {
  value1: PropTypes.string,
  value2: PropTypes.string,
  value3: PropTypes.string,
};

export default NavInfo;

// const mapStateToProps = (state) => ({
// })

// const mapDispatchToProps = {
// }

// export default connect(mapStateToProps, mapDispatchToProps)(index)
