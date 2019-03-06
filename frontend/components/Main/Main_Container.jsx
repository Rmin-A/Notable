import { connect }
  from 'react-redux';
import { withRouter }
  from "react-router";

import { logout, login, signup }
  from '../../actions/session_actions';
import { createNote, setCurrentNote }
  from '../../actions/note_actions';
import { setCurrentNotebook }
  from '../../actions/notebook_actions';
import { openModal }
  from '../../actions/modal_actions';

import Main from './Main';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser:
      state.session.currentUser,
    currentNotebook:
      (ownProps.match.params.notebookId) ?
        state.entities.notebooks[ownProps.match.params.notebookId]
      :
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
  createNote:
    (note) => dispatch(createNote(note)),
  setCurrentNote:
    (note) => dispatch(setCurrentNote(note)),
  setCurrentNotebook:
    (note) => dispatch(setCurrentNotebook(note)),
  openModal:
    (modal) => dispatch(openModal(modal)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
