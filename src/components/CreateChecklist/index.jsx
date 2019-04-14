import React from 'react';
import RenderNewField from '../RenderNewField';

export default function index() {
  return (
    <form method="POST" action="/get/checklist">
      <textarea required name="checklist_header" cols="30" placeholder="Название группы чеклиста" rows="6" />
      <RenderNewField element={[<textarea required name="checklist_text" cols="30" placeholder="ряд чеклиста" rows="6" />]} />
      <button type="submit">Добавить</button>
    </form>
  );
}
