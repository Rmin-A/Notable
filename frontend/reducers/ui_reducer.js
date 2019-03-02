import { combineReducers }
  from 'redux';

import modal
  from './interactions/modal_reducer';

export default combineReducers(
  {
    modal
  }
);
