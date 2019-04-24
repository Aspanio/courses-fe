/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  FETCH_MODULES, FETCH_MODULES_BLOCKS, GET_CHECKLIST, GET_ATTENTIONS,
} from './types';

export const fetchModules = _query => (dispatch) => {
  console.log('action');
  axios.get('/get')
    .then(res => dispatch({
      type: FETCH_MODULES,
      payload: res.data,
    }));
};

export const fetchAttentions = _query => (dispatch) => {
  console.log('actionFIRED');
  axios.get('/get/attention')
    .then(res => dispatch({
      type: GET_ATTENTIONS,
      payload: res.data,
    }));
};

export const fetchModulesBlocks = _query => (dispatch) => {
  console.log('action1');
  axios.get('/get/modules')
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_MODULES_BLOCKS,
        payload: res.data,
      });
    });
};

export const fetchListItems = _query => (dispatch) => {
  console.log('action1');
  axios.get('/get/checklist')
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_CHECKLIST,
        payload: res.data,
      });
    });
};
