/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_MODULES,
} from './types';

export const getModules = _query => (dispatch) => {
  axios.get('/get/modules')
    .then(res => dispatch({
      type: GET_MODULES,
      payload: res.data,
    }));
};
