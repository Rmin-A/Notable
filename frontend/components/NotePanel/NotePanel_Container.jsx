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
      if (!this.props.currentNote.id) {
        this.props.setCurrentNote(notes[0]);
      }
    }

    let newProps = Object.assign({}, this.props);
    newProps.notes = notes;
    return (
      <NotePanel {...newProps}/>
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
