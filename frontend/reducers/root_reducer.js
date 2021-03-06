import { combineReducers }
  from 'redux';

import session
  from './session_reducer';
import errors
  from './errors_reducer';
import entities
  from './entities_reducer';
import ui
  from './ui_reducer';
import interactions
  from './interactions_reducer';

const rootReducer = combineReducers(
  {
    entities,
    session,
    errors,
    interactions,
    ui
  }
);

export default rootReducer;
