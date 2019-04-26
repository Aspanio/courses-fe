import { GET_TASKS, FETCH_MODULES } from '../actions/types';

const initialState = {
  payload: [{ text: 'Загрузка..' }],
};

export default function fetchTasks(state = initialState, action) {
  switch (action.type) {
  case GET_TASKS:
    return {
      ...state,
      payload: action.payload,
    };
  case FETCH_MODULES:
    return {
      ...state,
      payload: action.payload,
      // код ниже надо проверить
      themesCount: action.themesCount,
    };
  default: return state;
  }
}
