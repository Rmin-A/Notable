import { combineReducers } from 'redux';

import changes from './interactions/unsaved_changes_reducer';

export default combineReducers({
  changes
});
