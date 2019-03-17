import React from 'react';
import ModuleScreen from '../../components/ModuleScreen';
import NavInfo from '../../components/NavInfo';
import BlockSlick from '../../components/BlockSlick';
import Tasks from '../../components/Tasks';

export default function ModulePage() {
  return (
    <div>
      <ModuleScreen />
      <NavInfo value2="Академия родительского мастерства" value3="Модуль 12" />
      <BlockSlick header="Задачи модуля" element={<Tasks />} />
    </div>
  );
}
