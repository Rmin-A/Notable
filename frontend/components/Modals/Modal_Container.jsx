import { connect }
  from 'react-redux';
import { withRouter }
  from 'react-router-dom';
import React
  from 'react';

import { closeModal }
  from '../../actions/modal_actions';
import { createNotebook }
  from '../../actions/notebook_actions';

import CreateNew
  from './CreateNew_Modal';

const modal = (props) => {
  if (!props.modal) {
    return null;
  }

  let component, cssClass;
  switch (props.modal) {
    case 'Notebook':
      cssClass = 'Notebook-Modal';
      component = <CreateNew
                    type="notebook"
                    handleSubmit={props.createNotebook}
                    closeModal={props.closeModal}
                  />;
    break;
    default:
     return null;
  }

  return(
    <div
      className="Modal_Background">
      <div
        className="Modal_Foreground"
        onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(modal));
