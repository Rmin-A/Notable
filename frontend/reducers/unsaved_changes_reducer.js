import { merge } from 'lodash';
import {
  SET_CURRENT_NOTE,
  UPDATE_CURRENT_NOTE_BODY,
  UPDATE_CURRENT_NOTE_TITLE,
  RECEIVE_NOTE
} from '../actions/note_actions';

const _nullNote = Object.freeze({
  id: null
});

const uiReducer = (state = { currentNote: false }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTE:
    return merge({}, state, { currentNote: false });
    case UPDATE_CURRENT_NOTE_BODY:
      newState = Object.assign({}, state);
      newState.currentNote = true;
      return newState;
    case UPDATE_CURRENT_NOTE_TITLE:
      newState = Object.assign({}, state);
      newState.currentNote = true;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
