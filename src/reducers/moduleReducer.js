import update from 'immutability-helper';
import { GET_MODULE, SUCSESS_MODULE } from '../actions/types';

const initialState = {
  payload: {},
  isLoading: true,
};

export default function moduleReducer(state = initialState, action) {
  switch (action.type) {
  case GET_MODULE:
    console.log(action.payload);
    return update(
      state,
      {
        isLoading: { $set: true },
      },
    );
  case SUCSESS_MODULE:
    console.log(action.payload);
    console.log('SUCSESS_MODULE');
    return update(
      state,
      {
        payload: { $set: action.payload },
        isLoading: { $set: false },
      },
    );
  default:
    return state;
  }
}
