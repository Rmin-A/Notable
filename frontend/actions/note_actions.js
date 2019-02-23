import * as APIUtil from '../utils/note_api_util';

export const RECEIVE_NOTE_ERRORS  = 'RECEIVE_NOTE_ERRORS';
export const RECEIVE_ALL_NOTES    = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';


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

export const fetchAllNotes = () => dispatch => (
  APIUtil.fetchAllNotes().then( payload => (
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
