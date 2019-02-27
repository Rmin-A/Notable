import { connect } from 'react-redux';
import { withRouter } from "react-router";

import {
  updateCurrentNoteBody,
  updateCurrentNoteTitle
} from '../../actions/note_actions';

import {
  openModal,
} from '../../actions/modal_actions';

import Editor from './Editor';

const mapStateToProps = ({
  entities: { interactions: { currentNote } },
  entities: { notebooks }
}) => {
  return {
    currentNote,
    notebooks
  };
};

const mapDispatchToProps = dispatch => ({
  updateCurrentNoteBody: (body) => dispatch(updateCurrentNoteBody(body)),
  updateCurrentNoteTitle: (title) => dispatch(updateCurrentNoteTitle(title)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor));
