import { merge }
  from 'lodash';

import {
  RECEIVE_ALL_NOTEBOOKS,
  SET_CURRENT_NOTEBOOK }
  from '../../actions/notebook_actions';

  const _nullNotebook = Object.freeze(
    {
      id: null,
    }
  );

const currentNotebookreducer = (state = _nullNotebook, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_CURRENT_NOTEBOOK:
      return action.notebook;
    default:
      return state;
  }
};

export default currentNotebookreducer;
