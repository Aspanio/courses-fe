import { FETCH_MODULE_PAGE_TASKS, GET_TASKS } from '../actions/types';

const initialState = {
  payload: [{ text: 'Загрузка..' }],
};

export default function fetchTasks(state = initialState, action) {
  switch (action.type) {
  case FETCH_MODULE_PAGE_TASKS:
    console.log(123);
    return {
      ...state,
      payload: action.payload,
    };
  case GET_TASKS:
    console.log(1234);
    return {
      ...state,
      payload: action.payload,
    };
  default: return state;
  }
}
