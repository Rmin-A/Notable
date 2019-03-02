import * as APIUtil from '../utils/notebook_api_util';

export const RECEIVE_NOTEBOOK_ERRORS = 'RECEIVE_NOTEBOOK_ERRORS';
export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const SET_CURRENT_NOTEBOOK = 'SET_CURRENT_NOTEBOOK';

export const receiveAllNotebooks = notebooks => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const receiveNotebookErrors = errors => ({
  type: RECEIVE_NOTEBOOK_ERRORS,
  errors
});

export const setCurrentNotebook = notebook => ({
  type: SET_CURRENT_NOTEBOOK,
  notebook
});

export const fetchAllNotebooks = () => dispatch => (
  APIUtil.fetchAllNotebooks().then( payload => (
    dispatch(receiveAllNotebooks( payload ))
  ), err => (
    dispatch(receiveNotebookErrors(err.responseJSON))
  ))
);

export const createNotebook = notebook => dispatch => (
  APIUtil.createNotebook(notebook).then( payload =>
    (dispatch(receiveNotebook(payload))
  ), err => (
    dispatch(receiveNotebookErrors(err.responseJSON))
  ))
);

export const updateNotebook = notebook => dispatch => (
  APIUtil.updateNotebook(notebook).then( payload =>
    (dispatch(receiveNotebook(payload))
  ), err => (
    dispatch(receiveNotebookErrors(err.responseJSON))
  ))
);
