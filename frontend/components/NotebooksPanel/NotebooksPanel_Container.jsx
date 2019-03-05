import React, { Component }
  from 'react';
import { connect }
  from 'react-redux';
import { withRouter }
  from "react-router";

import { updateNote }
  from '../../actions/note_actions';
import { fetchAllNotebooks }
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
        openModal={this.props.openModal}/>
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

const mapDispatchToProps = dispatch => ({
  updateNote:
    (note) => dispatch(updateNote(note)),
  fetchAllNotebooks:
    () => dispatch(fetchAllNotebooks()),
  openModal:
    (modal) => dispatch(openModal(modal)),
  closeModal:
    () => dispatch(closeModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksPanelContainer));
