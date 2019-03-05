import { connect }
  from 'react-redux';
import { withRouter }
  from "react-router";

import {
  fetchAllNotes,
  createNote,
  updateNote,
  setCurrentNote,
  updateCurrentNoteBody,
  updateCurrentNoteTitle }
  from '../../actions/note_actions';
import {
  setIntervalId,
  clearIntervalId }
  from '../../actions/interaction_actions';
import {
  fetchAllNotebooks,
  setCurrentNotebook }
  from '../../actions/notebook_actions';
import {
  openModal,
  closeModal }
  from '../../actions/modal_actions';

import NotePanel from './NotePanel';

const mapStateToProps = (state, ownProps) => {
  return {
    notes:
      state.entities.notes,
    notebooks:
      state.entities.notebooks,
    currentNote:
      state.interactions.currentNote,
    currentNotebook:
      state.interactions.currentNotebook,
    currentUser:
      state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllNotes:
    (notebookId) => dispatch(fetchAllNotes(notebookId)),
  fetchAllNotebooks:
    () => dispatch(fetchAllNotebooks()),
  createNote:
    (note) => dispatch(createNote(note)),
  updateNote:
    (note) => dispatch(updateNote(note)),
  setCurrentNote:
    (note) => dispatch(setCurrentNote(note)),
  setCurrentNotebook:
    (notebook) => dispatch(setCurrentNotebook(notebook)),
  updateCurrentNoteBody:
    (body) => dispatch(updateCurrentNoteBody(body)),
  updateCurrentNoteTitle:
    (title) => dispatch(updateCurrentNoteTitle(title)),
  setIntervalId:
    (id) => dispatch(setIntervalId(id)),
  clearIntervalId:
    (id) => dispatch(clearIntervalId(id)),
  openModal:
    (modal) => dispatch(openModal(modal)),
  closeModal:
    () => dispatch(closeModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotePanel));
