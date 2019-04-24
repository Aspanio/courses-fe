import { GET_MODULES } from '../actions/types';

const initialState = [];

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
  case GET_MODULES:
    return {
      ...state,
      payload: action.payload,
    };
  default:
    return state;
  }
}
