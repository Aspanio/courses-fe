import React from 'react';
import HeaderNav from '../../components/HeaderNav';
import MainScreen from '../../components/MainScreen';
import NavInfo from '../../components/NavInfo';
import './styles.scss';

export default function () {
  return (
    <div>
      <HeaderNav />
      <MainScreen />
      <NavInfo />
    </div>
  );
}
