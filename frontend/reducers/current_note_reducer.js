import { merge } from 'lodash';
import {
  SET_CURRENT_NOTE,
  UPDATE_CURRENT_NOTE_BODY,
  UPDATE_CURRENT_NOTE_TITLE,
} from '../actions/note_actions';

const _nullNote = Object.freeze({
  id: null,
  body: null,
  name: null,
});

const currentNoteReducer = (state = { currentNote: _nullNote }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_CURRENT_NOTE:
      return merge({}, state, { currentNote: Object.assign({}, action.note)});
    case UPDATE_CURRENT_NOTE_BODY:
      newState = Object.assign({}, state);
      newState.currentNote.body = action.body;
      return newState;
    case UPDATE_CURRENT_NOTE_TITLE:
      newState = Object.assign({}, state);
      newState.currentNote.name = action.title;
      return newState;
    default:
      return state;
  }
};

export default currentNoteReducer;
