import * as APIUtil from '../utils/note_api_util';

export const RECEIVE_NOTE_ERRORS = 'RECEIVE_NOTE_ERRORS';
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_CURRENT_NOTE_TITLE = 'UPDATE_CURRENT_NOTE_TITLE';
export const UPDATE_CURRENT_NOTE_BODY = 'UPDATE_CURRENT_NOTE_BODY';
export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE';

export const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const receiveNoteErrors = errors => ({
  type: RECEIVE_NOTE_ERRORS,
  errors
});

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

export const receiveDeletedNote = (deletedNoteId) => ({
  type: DELETE_NOTE,
  deletedNoteId
});

export const fetchAllNotes = (notebookId) => dispatch => (
  APIUtil.fetchAllNotes(notebookId).then( payload => (
    dispatch(receiveAllNotes( payload ))
  ), err => (
    dispatch(receiveNoteErrors(err.responseJSON))
  ))
);

export const createNote = note => dispatch => (
  APIUtil.createNote(note).then( payload =>
    (dispatch(receiveNote(payload))
  ), err => (
    dispatch(receiveNoteErrors(err.responseJSON))
  ))
);

export const updateNote = note => dispatch => (
  APIUtil.updateNote(note).then( payload =>
    (dispatch(receiveNote(payload))
  ), err => (
    dispatch(receiveNoteErrors(err.responseJSON))
  ))
);

export const deleteNote = (id) => dispatch => (
  APIUtil.deleteNote(id).then( payload =>
    (dispatch(receiveDeletedNote(payload))
  ), err => (
    dispatch(receiveNoteErrors(err.responseJSON))
  ))
);
