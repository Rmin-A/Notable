import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
} from '../actions/note_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_NOTES:
      return { notes: action.notes };
    case RECEIVE_NOTE:
      let newState = Object.assign({}, state);
      newState[action.note.id] = action.note;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
