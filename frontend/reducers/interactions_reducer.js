import { merge } from 'lodash';
import {
  SET_CURRENT_NOTE,
  UPDATE_CURRENT_NOTE,
} from '../actions/interaction_actions';

const _nullNote = Object.freeze({
  id: null
});

const interactionReducer = (state = { currentNote: _nullNote }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_CURRENT_NOTE:
      return { currentNote: action.note };
    case UPDATE_CURRENT_NOTE:
      let newState = Object.assign({}, state);
      newState = merge(newState, action.note);
      return newState;
    default:
      return state;
  }
};

export default interactionReducer;
