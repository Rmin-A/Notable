import { combineReducers } from 'redux';

import notes from './notes_reducer';
import interactions from './current_note_reducer';

export default combineReducers({
  notes,
  interactions,
});
