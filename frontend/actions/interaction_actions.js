export const SET_CURRENT_NOTE  = 'SET_CURRENT_NOTE';
export const UPDATE_CURRENT_NOTE_BODY    = 'UPDATE_CURRENT_NOTE_BODY';
export const UPDATE_CURRENT_NOTE_TITLE   = 'UPDATE_CURRENT_NOTE_TITLE';
export const SET_INTERVAL_REFRENCE   = 'SET_INTERVAL_REFRENCE';

export const setCurrentNote = note => ({
  type: SET_CURRENT_NOTE,
  note
});

export const updateCurrentNoteBody = body => ({
  type: UPDATE_CURRENT_NOTE_BODY,
  body
});

export const updateCurrentNoteTitle = title => ({
  type: UPDATE_CURRENT_NOTE_TITLE,
  title
});

export const setIntervalRefrence = id => ({
  type: SET_INTERVAL_REFRENCE,
  id
});
