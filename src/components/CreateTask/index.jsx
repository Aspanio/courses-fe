import React from 'react';

export default function index() {
  return (
    <form method="POST" action="/get/task">
      <textarea required name="task_text" cols="30" placeholder="Название задания модуля" rows="6" />
      <textarea required name="task_duration" cols="30" placeholder="Оценочное время выполнения задания. Например, 1 час 15 минут" rows="6" />
      <select required placeholder="Картинка задания" name="task_img">
        <option value="boxes">Коробочки</option>
        <option value="mind">Разум</option>
        <option value="sun">Солнышко</option>
      </select>
      <input required type="text" name="task_view" placeholder='Для "просмотреть"' />
      <hr />
      <button type="submit">+</button>
    </form>
  );
}
