import { combineReducers } from 'redux';
import fetchProgress from './fetchProgress';
import fetchTasks from './fetchTasks';

const rootReducer = combineReducers({
  fetchProgress,
  fetchTasks,
});

export default rootReducer;
