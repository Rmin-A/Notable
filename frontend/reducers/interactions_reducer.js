import { combineReducers } from 'redux';

import changes from './interactions/unsaved_changes_reducer';
import currentNote from './interactions/current_note_reducer';
import currentNotebook from './interactions/current_notebook_reducer';
import showBarStatus from './interactions/showbar_status_reducer';


export default combineReducers({
  changes,
  currentNote,
  currentNotebook,
  showBarStatus
});
