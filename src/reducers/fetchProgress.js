/* eslint-disable no-case-declarations */
import { FETCH_MODULES, FETCH_MODULES_BLOCKS } from '../actions/types';

const initialState = {
  themes: 1,
  themesDone: 0,
  payload: [
    {
      themeName: '1',
      text: '2',
      milestone: '3',
      date: '4',
    },
  ],
};

// eslint-disable-next-line func-names
initialState.progress = function () {
  return Math.floor((initialState.themesDone / initialState.themes) * 100);
};

export default function fetchProgress(state = initialState, action) {
  switch (action.type) {
  case FETCH_MODULES_BLOCKS:
    console.log('reducer1');
    return {
      ...state,
      payload: action.payload,
    };
  default: return state;
  }
}
