import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourses } from '../actions/courseAction';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getListCourses();
  }

  render() {
    console.log(this.props.courses);
    const links = this.props.courses.map(el => <li><Link to={`/course/${el._id}`}>{el._id}</Link></li>)
    return (
      <div>
        <h1>Доступные курсы</h1>
        <ol>
          {links}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  courses: state.courseReducer.payload,
});

const mapDispatchToProps = dispatch => ({
  getListCourses: () => dispatch(getCourses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
