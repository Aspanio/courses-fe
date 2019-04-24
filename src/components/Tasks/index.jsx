import React, { Component } from 'react';
//  import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchModuleTasks } from '../../actions/modulePageActions';
import Task from '../Task';
import styles from './styles.module.scss';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchModuleTasks();
  }

  render() {
    const { payload } = this.props;
    let counter = 0;
    const data = payload.map((el) => {
      counter += 1;
      return <Task key={counter} number={counter} text={el.text} />;
    });

    return (
      <div className={styles.tasks}>
        {data}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payload: state.fetchModules.payload,
});

// Tasks.propTypes = {
//   payload: PropTypes.arrayOf.isRequired,
// };

export default connect(mapStateToProps, { fetchModuleTasks })(Tasks);
