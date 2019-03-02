import { merge }
  from 'lodash';
import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_NOTEBOOK }
  from '../../actions/notebook_actions';

const notebookReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      let newState = Object.assign({}, state);
      newState = merge(newState, action.notebook);
      return newState;
    default:
      return state;
  }
};

export default notebookReducer;
