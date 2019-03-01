export const SET_SHOWBAR_STATUS  = 'SET_SHOWBAR_STATUS';
export const UPDATE_CURRENT_NOTE_BODY    = 'UPDATE_CURRENT_NOTE_BODY';
export const UPDATE_CURRENT_NOTE_TITLE   = 'UPDATE_CURRENT_NOTE_TITLE';
export const SET_INTERVAL_ID   = 'SET_INTERVAL_ID';
export const CLEAR_INTERVAL_ID   = 'CLEAR_INTERVAL_ID';

export const setShowBarStatus = status => ({
  type: SET_SHOWBAR_STATUS,
  status
});

export const updateCurrentNoteBody = body => ({
  type: UPDATE_CURRENT_NOTE_BODY,
  body
});

export const updateCurrentNoteTitle = title => ({
  type: UPDATE_CURRENT_NOTE_TITLE,
  title
});

export const setIntervalId = id => ({
  type: SET_INTERVAL_ID,
  id
});

export const clearIntervalId = id => ({
  type: CLEAR_INTERVAL_ID,
  id
});
