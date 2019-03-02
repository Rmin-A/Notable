import { combineReducers }
  from 'redux';

import session
  from './errors/session_errors_reducer';
import notes
  from './errors/notes_errors_reducer';

export default combineReducers(
  {
    session,
    notes,
  }
);
