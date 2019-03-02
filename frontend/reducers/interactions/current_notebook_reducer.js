import { merge }
  from 'lodash';

import {
  RECEIVE_CURRENT_USER }
  from '../../actions/session_actions';
import {
  SET_CURRENT_NOTEBOOK }
  from '../../actions/notebook_actions';

const currentNotebookreducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser.general_notebook;
    case SET_CURRENT_NOTEBOOK:
      return action.notebook;
    default:
      return state;
  }
};

export default currentNotebookreducer;
