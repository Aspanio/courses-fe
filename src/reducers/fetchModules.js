import { GET_TASKS } from '../actions/types';

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
  default: return state;
  }
}
