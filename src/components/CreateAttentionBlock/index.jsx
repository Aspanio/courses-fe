import React from 'react';

export default function index() {
  return (
    <form method="POST" action="/get/attention">
      <textarea required name="attention_header" cols="30" placeholder="Краткое описание" rows="6" />
      <textarea required name="attention_text" cols="30" placeholder="Контент" rows="6" />
      <select required placeholder="Картинка проверки" name="attention_img">
        <option value="swim">Спорт</option>
        <option value="hospital">Здоровье</option>
        <option value="sleep">Отдых</option>
      </select>
      <button type="submit">Добавить</button>
    </form>
  );
}
