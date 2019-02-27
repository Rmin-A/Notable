import { combineReducers } from 'redux';

import unsavedChanges from './unsaved_changes_reducer';
import modal from './modal_reducer';

export default combineReducers({
  unsavedChanges,
  modal
});
