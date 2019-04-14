import React from 'react';
import RenderNewField from '../RenderNewField';

export default function index() {
  return (
    <form method="POST" action="/get/dangerlist">
      <textarea required name="dangerlist_header" cols="30" placeholder="Название группы опасностей чеклиста" rows="6" />
      <RenderNewField element={[<textarea required name="dangerlist_text" cols="30" placeholder="ряд чеклиста" rows="6" />]} />
      <button type="submit">Добавить</button>
    </form>
  );
}
