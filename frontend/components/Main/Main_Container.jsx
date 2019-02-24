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
  setIntervalRefrence
} from '../../actions/interaction_actions';

import Main from './Main';

const mapStateToProps = ({
  session: { currentUser },
  entities: { notes },
  entities: { interactions: { currentNote }},
  ui: { unsavedChanges: {intervalId}, unsavedChanges: { currentNoteChanges }},
}) => {
  return {
    currentNote,
    currentUser,
    notes,
    currentNoteChanges,
    intervalId
  };
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logout()),
  signIn: () => dispatch(login()),
  signUp: () => dispatch(signup()),
  fetchAllNotes: () => dispatch(fetchAllNotes()),
  createNote: () => dispatch(createNote()),
  updateNote: (note) => dispatch(updateNote(note)),
  setCurrentNote: (note) => dispatch(setCurrentNote(note)),
  updateCurrentNoteBody: (body) => dispatch(updateCurrentNoteBody(body)),
  updateCurrentNoteTitle: (title) => dispatch(updateCurrentNoteTitle(title)),
  setIntervalRefrence: (id) => dispatch(setIntervalRefrence(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
