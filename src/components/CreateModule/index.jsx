import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenderNewField from '../RenderNewField';
import { getTasks } from '../../actions/modulePageActions';
import { fetchListItems, fetchAttentions } from '../../actions/moduleActions';

class CreateModule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getTasks();
    this.props.fetchListItems();
    this.props.fetchAttentions();
  }

  render() {
    const { payload, checklist, attention } = this.props;
    let checklistOptions = null;
    let attentionOptions = null;
    let option = null;
    if (attention) {
      attentionOptions = [];
      attention.map((el) => {
        attentionOptions.push(<option value={el._id}>{el.header}</option>);
      });
    }
    console.log(checklist);
    if (checklist !== undefined) {
      checklistOptions = [];
      checklist.map((el) => {
        checklistOptions.push(<option value={el._id}>{el.header}</option>);
      });
    }
    if (payload.data !== undefined) {
      option = [];
      payload.data.map((el) => {
        option.push(<option value={el._id}>{el.header}</option>);
      });
    }
    const style = option ? null : { display: 'none' }
    console.log(payload.data);

    return (
      <form action="/get/module" method="POST">
        <h4>Название нового модуля</h4>
        <input type="text" placeholder="Название модуля" name="name" required />
        <hr />
        <h4>Цели данного модуля</h4>
        <RenderNewField element={<textarea required name="objective" cols="50" placeholder="Цель модуля" rows="6" />} />
        <hr />
        <h4>Проработать</h4>
        <RenderNewField element={[
          <select name="taskId" style={style}>
            {option}
          </select>,
        ]}
        />
        <h4>Дополнительные задания</h4>
        <RenderNewField element={[
          <select name="extraTaskId" style={style}>
            {option}
          </select>,
        ]}
        />
        <hr />
        <h4>Что проверить?</h4>
        <RenderNewField element={[
          <select name="checklistId" style={style}>
            {checklistOptions}
          </select>,
        ]}
        />
        <h4>Оранжевый список</h4>
        <div>
          <input required type="text" name="dangerlist_header" placeholder="Заголовок группы" />
          <RenderNewField element={[
            <select name="dangerlistId" style={style}>
              {checklistOptions}
            </select>,
          ]}
          />
        </div>
        <hr />
        <h4>Обратить внимание</h4>
        <RenderNewField element={[
          <select name="attentionId" style={style}>
            {attentionOptions}
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
  block: state.fetchAttentions.data,
});

export default connect(mapStateToProps, { getTasks, fetchListItems, fetchAttentions })(CreateModule);
