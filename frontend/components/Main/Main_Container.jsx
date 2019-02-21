import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { logout, login, signup } from '../../actions/session_actions';
import { fetchAllNotes, createNote } from '../../actions/note_actions';
import Main from './Main';

const mapStateToProps = ({ session: { currentUser }, entities: { notes } }) => {
  return {
    currentUser,
    notes
  };
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logout()),
  signIn: () => dispatch(login()),
  signUp: () => dispatch(signup()),
  fetchAllNotes: () => dispatch(fetchAllNotes()),
  createNote: () => dispatch(createNote()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
