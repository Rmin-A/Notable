import { connect } from 'react-redux';
import { withRouter } from "react-router";

import Editor from './Editor';
import { setCurrentNote, updateCurrentNote } from '../../actions/interaction_actions';

const mapStateToProps = ({ currentNote }) => {
  return {
    currentNote
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentNote: (note) => dispatch(setCurrentNote(note)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor));
