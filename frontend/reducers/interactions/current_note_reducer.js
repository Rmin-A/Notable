import { merge }
  from 'lodash';
import {
  SET_CURRENT_NOTE,
  UPDATE_CURRENT_NOTE_BODY,
  UPDATE_CURRENT_NOTE_TITLE,
  DELETE_NOTE, }
  from '../../actions/note_actions';

const _nullNote = Object.freeze(
  {
    id: null,
    body: null,
    name: null,
  }
);

const currentNoteReducer = (state = _nullNote, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_CURRENT_NOTE:
      return ((action.note.id) ? action.note : _nullNote);
    case UPDATE_CURRENT_NOTE_BODY:
      newState = Object.assign({}, state);
      newState.body = action.body;
      return newState;
    case UPDATE_CURRENT_NOTE_TITLE:
      newState = Object.assign({}, state);
      newState.name = action.title;
      return newState;
    case DELETE_NOTE:
      return _nullNote;
    default:
      return state;
  }
};

export default currentNoteReducer;
