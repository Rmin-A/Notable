import { connect } from 'react-redux';
import { withRouter } from "react-router";

import SideBar from './SideBar';
import { createNote } from '../../actions/note_actions';

const mapStateToProps = ({ session: { currentUser }}) => {
  return {
    currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  createNote: (note) => dispatch(createNote(note)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar));
