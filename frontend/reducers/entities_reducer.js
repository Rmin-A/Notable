import { combineReducers } from 'redux';

import notes from './notes_reducer';
import interactions from './interactions_reducer';

export default combineReducers({
  notes,
  interactions,
});
