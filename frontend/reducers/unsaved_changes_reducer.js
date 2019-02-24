import { merge } from 'lodash';
import {
  SET_CURRENT_NOTE,
  UPDATE_CURRENT_NOTE_BODY,
  UPDATE_CURRENT_NOTE_TITLE,
  RECEIVE_NOTE,
} from '../actions/note_actions';


const unsavedChangesReducer = (state = { notes: "false" }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTE:
    return merge({}, state, { notes: "false" });
    case SET_CURRENT_NOTE:
    return merge({}, state, { notes: "false" });
    case UPDATE_CURRENT_NOTE_BODY:
      newState = Object.assign({}, state);
      newState.notes = "true";
      return newState;
    case UPDATE_CURRENT_NOTE_TITLE:
      newState = Object.assign({}, state);
      newState.notes = "true";
      return newState;
    default:
      return state;
  }
};

export default unsavedChangesReducer;
