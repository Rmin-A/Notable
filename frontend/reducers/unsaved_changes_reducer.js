import { merge } from 'lodash';
import {
  UPDATE_CURRENT_NOTE_BODY,
  UPDATE_CURRENT_NOTE_TITLE,
  RECEIVE_NOTE
} from '../actions/note_actions';


const unsavedChangesReducer = (state = { notes: "unchanged" }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTE:
    return state;
    case UPDATE_CURRENT_NOTE_BODY:
      newState = Object.assign({}, state);
      newState.notes = "changed";
      return newState;
    case UPDATE_CURRENT_NOTE_TITLE:
      newState = Object.assign({}, state);
      newState.notes = "changed";
      return newState;
    default:
      return state;
  }
};

export default unsavedChangesReducer;
