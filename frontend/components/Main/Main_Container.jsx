import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { logout, login, signup } from '../../actions/session_actions';
import {
  fetchAllNotes,
  createNote,
  updateNote,
  setCurrentNote,
  updateCurrentNoteBody,
  updateCurrentNoteTitle,
} from '../../actions/note_actions';

import {
  setIntervalId,
  clearIntervalId
} from '../../actions/interaction_actions';

import {
  fetchAllNotebooks,
  setCurrentNotebook
} from '../../actions/notebook_actions';

import {
  openModal,
  closeModal
} from '../../actions/modal_actions';

import Main from './Main';

const mapStateToProps = (state) => {
  return {
    notes: state.entities.notes,
    notebooks: state.entities.notebooks,
    currentNote: state.interactions.currentNote,
    currentUser: state.session.currentUser,
    showBarStatus: state.interactions.showBarStatus
  };
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logout()),
  signIn: () => dispatch(login()),
  signUp: () => dispatch(signup()),
  fetchAllNotes: () => dispatch(fetchAllNotes()),
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  createNote: () => dispatch(createNote()),
  updateNote: (note) => dispatch(updateNote(note)),
  setCurrentNote: (note) => dispatch(setCurrentNote(note)),
  setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook)),
  updateCurrentNoteBody: (body) => dispatch(updateCurrentNoteBody(body)),
  updateCurrentNoteTitle: (title) => dispatch(updateCurrentNoteTitle(title)),
  setIntervalId: (id) => dispatch(setIntervalId(id)),
  clearIntervalId: (id) => dispatch(clearIntervalId(id)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
