import { merge } from 'lodash';
import {
  SET_SHOWBAR_STATUS,
} from '../../actions/interaction_actions';

const showBarStatusReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_SHOWBAR_STATUS:
      return action.status;
    default:
      return "All Notes";
  }
};

export default showBarStatusReducer;
