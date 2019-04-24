/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getModules } from '../../actions/courseAction';
import RenderNewField from '../RenderNewField';

class CreateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getModules());
  }

  render() {
    const { payload } = this.props;
    let modules = [];
    if (payload) {
      payload.map((el) => {
        console.log(el);
        modules.push(<option key={el._id} value={el._id}>{el.name}</option>);
      });
    }
    return (
      <form action="/get/course" method="POST">
        <input type="text" required />
        <RenderNewField element={[
          <select name="moduleId">
            {modules}
          </select>,
        ]}
        />
        <button type="submit">Создать курс</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  payload: state.courseReducer.payload,
});

CreateCourse.propTypes = {
  dispatch: PropTypes.func.isRequired,
  payload: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(CreateCourse);
