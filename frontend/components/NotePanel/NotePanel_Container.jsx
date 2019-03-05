import React, { Component }from 'react';
import { connect }
  from 'react-redux';
import { withRouter }
  from "react-router";

import {
  fetchAllNotes,
  updateNote,
  setCurrentNote,
  updateCurrentNoteBody,
  updateCurrentNoteTitle }
  from '../../actions/note_actions';
import {
  openModal,
  closeModal }
  from '../../actions/modal_actions';

import NotePanel from './NotePanel';

class NotePanelContainer extends Component {

  componentDidMount() {
    this.props.fetchAllNotes(this.props.currentNotebook.id);
  }

  render() {
    return (
      <NotePanel
        {...this.props}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes:
      state.entities.notes,
    currentNote:
      state.interactions.currentNote,
    currentNotebook:
      state.interactions.currentNotebook,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllNotes:
    (notebookId) => dispatch(fetchAllNotes(notebookId)),
  updateNote:
    (note) => dispatch(updateNote(note)),
  setCurrentNote:
    (note) => dispatch(setCurrentNote(note)),
  updateCurrentNoteBody:
    (body) => dispatch(updateCurrentNoteBody(body)),
  updateCurrentNoteTitle:
    (title) => dispatch(updateCurrentNoteTitle(title)),
  openModal:
    (modal) => dispatch(openModal(modal)),
  closeModal:
    () => dispatch(closeModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotePanelContainer));
