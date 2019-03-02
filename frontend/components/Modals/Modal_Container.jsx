import { connect }
  from 'react-redux';
import { withRouter }
  from 'react-router-dom';
import React
  from 'react';

import { closeModal, openModal }
  from '../../actions/modal_actions';
import { createNotebook }
  from '../../actions/notebook_actions';
import { updateNote, deleteNote, setCurrentNote }
  from '../../actions/note_actions';
import CreateNew
  from './CreateNew_Modal';
import CornerMenu
  from './CornerMenu_Modal';
import DeleteNote
  from './DeleteNote_Modal';
import Notebooks
  from '../ShowPage/Notebooks';

const modal = (props) => {
  if (!props.modal) {
    return null;
  }

  let component;
  let background;
  switch (props.modal) {
    case 'Notebook':
      component = <CreateNew
                    type="notebook"
                    handleSubmit={props.createNotebook}
                    closeModal={props.closeModal}/>;
      background = "Modal-Background";
      break;
    case 'Corner_Menu':
      component = <CornerMenu
                    closeModal={props.closeModal}
                    openModal={props.openModal}/>;
      background = "Menu-ModaL-Background";
      break;
    case 'Notebook_Move':
      component = <Notebooks
                    closeModal={props.closeModal}
                    notebooks={props.notebooks}
                    currentNote={props.currentNote}
                    onCLick={props.updateNote}
                    setCurrentNote={props.setCurrentNote}
                    formType="modal"
                    className="Notebooks-Modal"/>;
      background = "Modal-Background";
      break;
    case 'Notebook_Delete':
      component = <DeleteNote
                    closeModal={props.closeModal}
                    deleteNote={props.deleteNote}
                    currentNote={props.currentNote}/>;
      background = "Modal-Background";
      break;
    default:
      return null;
  }

  return(
    <div
      className={background}
      onClick={props.closeModal}>
      {component}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modal:
      state.ui.modal,
    currentNote:
      state.interactions.currentNote,
    notebooks:
      state.entities.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal:
      (m) => dispatch(openModal(m)),
    closeModal:
      () => dispatch(closeModal()),
    updateNote:
      (note) => dispatch(updateNote(note)),
    deleteNote:
      (id) => dispatch(deleteNote(id)),
    setCurrentNote:
      (note) => dispatch(setCurrentNote(note)),
    createNotebook:
      (notebook) => dispatch(createNotebook(notebook)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(modal));
