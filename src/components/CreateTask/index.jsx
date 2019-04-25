import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <form method="POST" action="/get/task">
        <h4>Тут добавляется блок задания, который будет отображаться в Допольнителые задания и/или Задания</h4>
        <textarea required name="task_text" cols="30" placeholder="Название задания модуля" rows="6" />
        <textarea required name="task_duration" cols="30" placeholder="Оценочное время выполнения задания. Например, 1 час 15 минут" rows="6" />
        <select required placeholder="Тип задания" name="task_type">
          <option value="article">Статья</option>
          <option value="test">Тест</option>
          <option value="video">Видео</option>
        </select>
        <select required placeholder="Картинка задания" name="task_img">
          <option value="boxes">Коробочки</option>
          <option value="mind">Разум</option>
          <option value="sun">Солнышко</option>
        </select>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
          placeholder='Контент "просмотреть"'
          modules={CreateTask.modules}
        />
        <textarea name="task_view" cols="100" rows="20" value={this.state.text} style={{display: 'none'}} />
        <hr />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

CreateTask.modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['clean'],
    ['video'],
    ['image'],
  ],
};

export default CreateTask;
