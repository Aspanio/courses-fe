import update from 'immutability-helper';
import { GET_MODULES, GET_COURSES } from '../actions/types';

const initialState = {
  payload: [],
  isLoading: true,
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
  case GET_MODULES:
    console.log(action.payload);
    return update(
      state,
      {
        payload: { $set: action.payload },
      },
    );
  case GET_COURSES:
    console.log(action.payload);
    return update(
      state,
      {
        payload: { $set: action.payload },
      },
    );
  default:
    return state;
  }
}
