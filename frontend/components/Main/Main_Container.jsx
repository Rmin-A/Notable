import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { logout, login, signup } from '../../actions/session_actions';
import { fetchAllNotes, createNote } from '../../actions/note_actions';
import { setCurrentNote, updateCurrentNote } from '../../actions/interaction_actions';

import Main from './Main';

const mapStateToProps = ({ session: { currentUser }, entities: { notes }, entities: { interactions: {currentNote}} }) => {
  debugger
  return {
    currentUser,
    notes,
    currentNote
  };
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logout()),
  signIn: () => dispatch(login()),
  signUp: () => dispatch(signup()),
  fetchAllNotes: () => dispatch(fetchAllNotes()),
  createNote: () => dispatch(createNote()),
  setCurrentNote: (note) => dispatch(setCurrentNote(note)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
