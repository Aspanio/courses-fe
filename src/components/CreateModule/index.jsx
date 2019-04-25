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
        console.log(el._id)
        option.push(<option key={el._id} value={el._id}>{el.header}</option>);
      });
    }
    const style = { display: 'block' };
    console.log(option);

    return (
      <form action="/get/module" method="POST">
        <h4>Краткое описание модуля (отображается на странице курсов)</h4>
        <textarea name="shortDesc" cols="30" rows="10" placeholder="Краткое описание модуля" required />
        <input type="number" placeholder="полных лет" name="shortDescYears" />
        <input type="number" placeholder="и/или месяцев" name="shortDescMonths" />
        <h4>Название нового модуля</h4>
        <input type="text" placeholder="Название модуля" name="name" required />
        <hr />
        <h4>Цели данного модуля</h4>
        <RenderNewField element={<textarea key={Math.floor(Math.random(1000) + 1)} required name="objective" cols="50" placeholder="Цель модуля" rows="6" />} />  
        <hr />
        <h4>Проработать</h4>
        <RenderNewField element={[
          <select key={Math.floor(Math.random(1000) + 1)} name="taskId" style={style}>
            {option}
          </select>,
        ]}
        />
        <h4>Дополнительные задания</h4>
        <RenderNewField element={[
          <select key={Math.floor(Math.random(1000) + 1)} name="extraTaskId" style={style}>
            {option}
          </select>,
        ]}
        />
        <hr />
        <h4>Что проверить?</h4>
        <RenderNewField element={[
          <select key={Math.floor(Math.random(1000) + 1)} name="checklistId" style={style}>
            {checklistOptions}
          </select>,
        ]}
        />
        <h4>Оранжевый список</h4>
        <div>
          <input required type="text" name="dangerlist_header" placeholder="Заголовок группы" />
          <RenderNewField element={[
            <select key={Math.floor(Math.random(1000) + 1)} name="dangerlistId" style={style}>
              {checklistOptions}
            </select>,
          ]}
          />
        </div>
        <hr />
        <h4>Обратить внимание</h4>
        <RenderNewField element={[
          <select key={Math.floor(Math.random(1000) + 1)} name="attentionId" style={style}>
            {attentionOptions}
          </select>,
        ]}
        />
        <input type="text" required />
        <RenderNewField element={[
          <select key={Math.floor(Math.random(1000) + 1)} name="moduleId" style={style}>
            {}
          </select>,
        ]}
        />
        <br />
        <button type="submit">Добавить</button>
      </form>
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
