import { merge }
  from 'lodash';
import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
  DELETE_NOTE }
  from '../../actions/note_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      let newState = Object.assign({}, state);
      newState = merge(newState, action.note);
      return newState;
      case DELETE_NOTE:
        return action.notes;
    default:
      return state;
  }
};

export default sessionReducer;
