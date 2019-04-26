/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RenderNewField from '../RenderNewField';
import { getTasks } from '../../actions/modulePageActions';
import { fetchListItems, fetchAttentions } from '../../actions/moduleActions';

class CreateModule extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTasks());
    dispatch(fetchListItems());
    dispatch(fetchAttentions());
  }

  render() {
    const { payload, checklist, block } = this.props;
    console.log(payload);
    let checklistOptions = null;
    let attentionOptions = null;
    let option = null;
    if (block) {
      attentionOptions = [];
      block.map((el) => {
        attentionOptions.push(<option key={el._id} value={el._id}>{el.header}</option>);
      });
    }
    console.log(checklist);
    if (checklist !== undefined) {
      checklistOptions = [];
      checklist.map((el) => {
        checklistOptions.push(<option key={el._id} value={el._id}>{el.header}</option>);
      });
    }
    if (payload !== undefined) {
      option = [];
      payload.map((el) => {
        console.log(el._id);
        option.push(<option key={el._id} value={el._id}>{el.header}</option>);
      });
    }
    const style = { display: 'block' };
    console.log(option);

    return (
      <div>
        <form action="/get/delete/task" method="POST">
          <h4>Удалить задания</h4>
          <select key={Math.floor(Math.random(1000) + 1)} name="taskId" style={style}>
            {option}
          </select>
          <button type="submit">Удалить</button>
        </form>
        <form action="/get/delete/checklist" method="POST">
          <h4>Удалить чеклист</h4>
          <select key={Math.floor(Math.random(1000) + 1)} name="checklistId" style={style}>
            {checklistOptions}
          </select>
          <button type="submit">Удалить</button>
        </form>
        <form action="/get/delete/attention" method="POST">
          <h4>Удалить обратить внимание</h4>
          <select key={Math.floor(Math.random(1000) + 1)} name="attentionId" style={style}>
            {attentionOptions}
          </select>
          <button type="submit">Удалить</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payload: state.fetchModules.payload,
  checklist: state.fetchListItems.payload,
  block: state.fetchListItems.data,
});

export default connect(mapStateToProps)(CreateModule);

CreateModule.propTypes = {
  payload: PropTypes.arrayOf.isRequired,
  checklist: PropTypes.arrayOf.isRequired,
  block: PropTypes.arrayOf.isRequired,
  dispatch: PropTypes.func.isRequired,
};
