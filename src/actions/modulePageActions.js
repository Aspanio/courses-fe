/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */

import axios from 'axios';
import { FETCH_MODULE_PAGE_TASKS, GET_TASKS } from './types';

export const fetchModuleTasks = _query => (dispatch) => {
  axios.get('/get/modules/tasks')
    .then(res => dispatch({
      type: FETCH_MODULE_PAGE_TASKS,
      payload: res.data,
    }));
};

export const getTasks = _query => (dispatch) => {
  axios.get('/get/tasks')
    .then(res => dispatch({
      type: GET_TASKS,
      payload: res.data,
    }));
};
