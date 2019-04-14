import { GET_CHECKLIST, GET_ATTENTIONS } from '../actions/types';

const initialState = [
  {
    header: 'err',
    list: [
      {
        text: 'err',
        done: true,
      },
    ],
  },
];

export default function fetchListItems(state = initialState, action) {
  switch (action.type) {
  case GET_CHECKLIST:
    return {
      ...state,
      payload: action.payload,
    };
  case GET_ATTENTIONS:
    return {
      ...state,
      data: action.payload,
    };
  default:
    return state;
  }
}
