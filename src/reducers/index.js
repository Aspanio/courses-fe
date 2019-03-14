import { combineReducers } from 'redux';
import fetchProgress from './fetchProgress';

const rootReducer = combineReducers({
  fetchProgress,
});

export default rootReducer;
