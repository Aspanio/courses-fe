/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */

import axios from 'axios';
import { GET_TASKS } from './types';

export const getTasks = _query => (dispatch) => {
  axios.get('/get/tasks')
    .then(res => dispatch({
      type: GET_TASKS,
      payload: res.data,
    }));
};
