import { merge }
  from 'lodash';
import {
  SET_CURRENT_NOTE,
  UPDATE_CURRENT_NOTE_BODY,
  UPDATE_CURRENT_NOTE_TITLE,
  RECEIVE_NOTE }
  from '../../actions/note_actions';
import {
  SET_INTERVAL_ID,
  CLEAR_INTERVAL_ID }
  from '../../actions/interaction_actions';

const _currentNote = { currentNote: null };

const changesReducer = (state = _currentNote, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTE:
      return merge({}, state, _currentNote);
    case SET_CURRENT_NOTE:
      return merge({}, state, _currentNote);
    case UPDATE_CURRENT_NOTE_BODY:
      newState = Object.assign({}, state);
      newState.currentNote = "unsaved";
      return newState;
    case UPDATE_CURRENT_NOTE_TITLE:
      newState = Object.assign({}, state);
      newState.currentNote = "unsaved";
      return newState;
    default:
      return state;
  }
};

export default changesReducer;
