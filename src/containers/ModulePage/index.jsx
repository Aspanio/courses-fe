import React from 'react';
import ModuleScreen from '../../components/ModuleScreen';
import NavInfo from '../../components/NavInfo';
import BlockSlick from '../../components/BlockSlick';
import Tasks from '../../components/Tasks';
import Todos from '../../components/Todos';
import Checkboard from '../../components/Checkboard';
import Recommendations from '../../components/Recomendations';
import QuestionSlick from '../../components/QuestionSlick';

export default function ModulePage() {
  return (
    <div>
      <ModuleScreen />
      <NavInfo value2="Академия родительского мастерства" value3="Модуль 12" />
      <BlockSlick header="Задачи модуля" element={<Tasks />} />
      <BlockSlick header="Проработать" style={{ backgroundColor: '#fafafa' }} element={<Todos />} />
      <BlockSlick header="Дополнительные задания" element={<Todos />} />
      <BlockSlick header="Что проверить?" style={{ backgroundColor: '#fafafa' }} element={<Checkboard />} />
      <BlockSlick header="Обратить внимание" element={<Recommendations />} />
      <BlockSlick header="Частые вопросы" element={<Recommendations />} />
    </div>
  );
}
