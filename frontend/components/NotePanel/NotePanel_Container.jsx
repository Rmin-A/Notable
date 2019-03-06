import React, { Component }
  from 'react';
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
import NotePanel
  from './NotePanel';

class NotePanelContainer extends Component {

  componentDidMount() {
    this.props.fetchAllNotes(this.props.currentNotebook.id);
  }

  componentWillUnmount() {
    if (this.props.unsavedChanges) {
      this.props.updateNote(this.props.currentNote);
    }
  }

  componentDidUpdate(prevProps) {
    if (Object.keys(this.props.notes).length > 0) {
      if (
        !this.props.currentNote.id ||
        Object.keys(
          this.props.notes).length !==
          Object.keys(prevProps.notes).length
      ){
        let newState = this.sortNotes();
        this.props.setCurrentNote(newState[0]);
      }
    }
    if (prevProps.currentNote.id &&
        this.props.currentNote.id &&
        prevProps.currentNote.id !== this.props.currentNote.id &&
        prevProps.unsavedChanges)
    {
      this.props.updateNote(prevProps.currentNote);
    }
  }

  sortNotes() {
    let sortable = [];
    for ( let id in this.props.notes) {
      if (this.props.notes.hasOwnProperty(id)) {
        sortable.push(this.props.notes[id]);
      }
    }
    sortable.sort( (a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    return sortable;
  }

  render() {
    let notes = [];
    if (Object.keys(this.props.notes).length > 0) {
      notes = this.sortNotes();
    }

    let newProps = Object.assign({}, this.props);
    newProps.notes = notes;
    return (
      <NotePanel {...newProps}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    notes:
      state.entities.notes,
    currentNote:
      state.interactions.currentNote,
    currentNotebook:
      (ownProps.match.params.notebookId && Object.keys(state.entities.notebooks).length > 0) ?
        state.entities.notebooks[ownProps.match.params.notebookId]
      :
        state.interactions.currentNotebook,
    unsavedChanges:
      state.interactions.changes.currentNote
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
