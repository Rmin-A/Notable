import React, { Component }
  from 'react';
import { connect }
  from 'react-redux';
import { withRouter }
  from "react-router";

import { updateNote, setCurrentNote }
  from '../../actions/note_actions';
import { fetchAllNotebooks, setCurrentNotebook }
  from '../../actions/notebook_actions';
import { openModal, closeModal }
  from '../../actions/modal_actions';
import NotebooksPanel
  from './NotebooksPanel';

class NotebooksPanelContainer extends Component {

  componentDidMount() {
    this.props.fetchAllNotebooks();
  }

  handleUpdate = () => {
    let that = this;
    return (notebook) => {
      let note = Object.assign({}, that.props.currentNote);
      note.notebook_id = notebook.id;
      that.props.updateNote(note);
      that.props.setCurrentNote(note);
      that.props.setCurrentNotebook(notebook);
      that.props.closeModal();
    }
  }

  render() {
    return(
      <NotebooksPanel
        notebooks={this.props.notebooks}
        openModal={this.props.openModal}
        clickHandler={ this.handleUpdate() }
        className="Notebooks-Modal" />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks:
      state.entities.notebooks,
    currentNotebook:
      state.interactions.currentNotebook,
    currentNote:
      state.interactions.currentNote,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNote:
      (note) => dispatch(updateNote(note)),
    fetchAllNotebooks:
      () => dispatch(fetchAllNotebooks()),
    setCurrentNotebook:
      (notebook) => dispatch(setCurrentNotebook(notebook)),
    setCurrentNote:
      (note) => dispatch(setCurrentNote(note)),
    openModal:
      (modal) => dispatch(openModal(modal)),
    closeModal:
      () => dispatch(closeModal())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksPanelContainer));
