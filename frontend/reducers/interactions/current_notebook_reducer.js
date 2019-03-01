import { merge } from 'lodash';
import {
  SET_CURRENT_NOTE,
} from '../../actions/note_actions';

const currentNotebookreducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_CURRENT_NOTE:
      return action.note.notebook_id;
    default:
      return state;
  }
};

export default currentNotebookreducer;
