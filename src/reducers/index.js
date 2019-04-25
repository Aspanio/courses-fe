import { combineReducers } from 'redux';
import fetchProgress from './fetchProgress';
import fetchModules from './fetchModules';
import fetchTodos from './fetchTodos';
import fetchListItems from './fetchListItems';
import fetchDangers from './fetchDangers';
import fetchRecommendations from './fetchRecommendations';
import courseReducer from './courseReducer';
import moduleReducer from './moduleReducer';

const rootReducer = combineReducers({
  fetchProgress,
  fetchModules,
  fetchTodos,
  fetchListItems,
  fetchDangers,
  fetchRecommendations,
  courseReducer,
  moduleReducer,
});

export default rootReducer;
