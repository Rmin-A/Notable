import React, { Component }
  from 'react';
import { connect }
  from 'react-redux';
import { withRouter }
  from "react-router";

import { updateNote }
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

  render() {
    return(
      <NotebooksPanel
        notebooks={this.props.notebooks}
        openModal={this.props.openModal}
        clickHandler={this.props.setCurrentNotebook}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks:
      state.entities.notebooks,
    currentNotebook:
      state.interactions.currentNotebook,
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
