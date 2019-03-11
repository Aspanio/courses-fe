import React, { Component } from 'react';
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
    return (
      <div className={styles.navInfoContainer}>
        <div className={styles.navInfoContent}>
          <h4><a href="#1">Главная</a></h4>
          <div className={styles.line} />
          <h4><a href="#1">Курсы</a> </h4>
          <div className={styles.line} />
          <h4><a href="#1">Состав курса</a> </h4>
        </div>
      </div>
    );
  }
}

export default NavInfo;

// const mapStateToProps = (state) => ({
// })

// const mapDispatchToProps = {
// }

// export default connect(mapStateToProps, mapDispatchToProps)(index)
