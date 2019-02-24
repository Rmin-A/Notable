import { connect } from 'react-redux';
import { withRouter } from "react-router";

import {
  updateCurrentNoteBody,
  updateCurrentNoteTitle
} from '../../actions/note_actions';

import Editor from './Editor';

const mapStateToProps = ({
  entities: { interactions: { currentNote }},
}) => {
  return {
    currentNote,
  };
};

const mapDispatchToProps = dispatch => ({
  updateCurrentNoteBody: (body) => dispatch(updateCurrentNoteBody(body)),
  updateCurrentNoteTitle: (title) => dispatch(updateCurrentNoteTitle(title)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor));
