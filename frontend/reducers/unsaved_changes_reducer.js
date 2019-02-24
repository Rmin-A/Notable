import { merge } from 'lodash';
import {
  SET_CURRENT_NOTE,
  UPDATE_CURRENT_NOTE_BODY,
  UPDATE_CURRENT_NOTE_TITLE,
  RECEIVE_NOTE,
} from '../actions/note_actions';

import {
  SET_INTERVAL_ID,
  CLEAR_INTERVAL_ID,
} from '../actions/interaction_actions';

const unsavedChangesReducer = (state = { currentNoteChanges: null, intervalId: null }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTE:
      return merge({}, state, { currentNoteChanges: null, intervalId: null });
    case SET_CURRENT_NOTE:
      return merge({}, state, { currentNoteChanges: null, intervalId: null });
    case UPDATE_CURRENT_NOTE_BODY:
      newState = Object.assign({}, state);
      newState.currentNoteChanges = "available";
      return newState;
    case UPDATE_CURRENT_NOTE_TITLE:
      newState = Object.assign({}, state);
      newState.currentNoteChanges = "available";
      return newState;
    case SET_INTERVAL_ID:
      newState = Object.assign({}, state);
      newState.intervalId = action.id;
      return newState;
    case CLEAR_INTERVAL_ID:
      newState = Object.assign({}, state);
      newState.intervalId = null;
      return newState;
    default:
      return state;
  }
};

export default unsavedChangesReducer;
