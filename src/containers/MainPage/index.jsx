import React from 'react';
import MainScreen from '../../components/MainScreen';
import NavInfo from '../../components/NavInfo';
import FilterBar from '../../components/FilterBar';
import ThemesBlock from '../../components/ThemesBlock';
import './styles.scss';

export default function () {
  return (
    <div>
      <MainScreen />
      <NavInfo />
      <FilterBar />
      <ThemesBlock />
    </div>
  );
}
