import { combineReducers } from 'redux';

import unsavedChanges from './unsaved_changes_reducer';

export default combineReducers({
  unsavedChanges
});
