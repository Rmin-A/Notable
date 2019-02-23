import { merge } from 'lodash';
import {
  SET_CURRENT_NOTE,
  UPDATE_CURRENT_NOTE_BODY,
  UPDATE_CURRENT_NOTE_TITLE,
} from '../actions/interaction_actions';
import { RECEIVE_NOTE } from '../actions/note_actions';

const _nullNote = Object.freeze({
  id: null
});

const interactionReducer = (state = { currentNote: _nullNote, unsavedChanges: false }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_CURRENT_NOTE:
    return merge({}, state, { currentNote: Object.assign({}, action.note)});
      // return { currentNote: Object.assign({}, action.note), unsavedChanges: false };
    case UPDATE_CURRENT_NOTE_BODY:
      newState = Object.assign({}, state);
      newState.currentNote.body = action.body;
      newState.unsavedChanges = true;
      return newState;
    case UPDATE_CURRENT_NOTE_TITLE:
      newState = Object.assign({}, state);
      newState.currentNote.name = action.title;
      newState.unsavedChanges = true;
      return newState;
    case RECEIVE_NOTE:
      newState = Object.assign({}, state);
      newState.unsavedChanges = false;
      return newState;
    default:
      return state;
  }
};

export default interactionReducer;
