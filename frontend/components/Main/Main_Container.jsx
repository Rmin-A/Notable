import { connect }
  from 'react-redux';
import { withRouter }
  from "react-router";

import { logout, login, signup }
  from '../../actions/session_actions';
import { createNote }
  from '../../actions/note_actions';
import { setCurrentNotebook }
  from '../../actions/notebook_actions';

import Main from './Main';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser:
      state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  logOut:
    () => dispatch(logout()),
  signIn:
    () => dispatch(login()),
  signUp:
    () => dispatch(signup()),
  createNote:
    (note) => dispatch(createNote(note)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));




/**
import { connect }
  from 'react-redux';
import { withRouter }
  from "react-router";

import { logout, login, signup }
  from '../../actions/session_actions';
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

import Main from './Main';

const mapStateToProps = (state, ownProps) => {
  return {
    notes:
      state.entities.notes,
    notebooks:
      state.entities.notebooks,
    currentNote:
      state.interactions.currentNote,
    currentUser:
      state.session.currentUser,
    currentNotebook:
      state.interactions.currentNotebook,
  };
};

const mapDispatchToProps = dispatch => ({
  logOut:
    () => dispatch(logout()),
  signIn:
    () => dispatch(login()),
  signUp:
    () => dispatch(signup()),
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
)(Main));

*/
