import { combineReducers } from 'redux';

import notes from './entities/notes_reducer';
import notebooks from './entities/notebooks_reducer';
import interactions from './interactions/current_note_reducer';

export default combineReducers({
  notes,
  interactions,
  notebooks,
});
