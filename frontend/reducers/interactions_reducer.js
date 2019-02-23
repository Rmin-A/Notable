import { merge } from 'lodash';
import {
  SET_CURRENT_NOTE,
  UPDATE_CURRENT_NOTE_BODY,
  UPDATE_CURRENT_NOTE_TITLE,
} from '../actions/interaction_actions';

const _nullNote = Object.freeze({
  id: null
});

const interactionReducer = (state = { currentNote: _nullNote }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_CURRENT_NOTE:
      return { currentNote: action.note };
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

export default interactionReducer;