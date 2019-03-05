import React, { Component }
  from 'react';
import { merge }
  from 'lodash';
import { Switch, Redirect }
  from 'react-router-dom';

import { ProtectedRoute }
  from '../../utils/route_api_util';
import { fetchAllNotes }
  from '../../actions/note_actions';
import Sidebar
  from '../Sidebar/Sidebar';
import ShowPage
  from '../ShowPage/ShowPage';
import NotePanel
  from '../NotePanel/NotePanel_Container';

class Main extends Component {

  componentDidMount() {
    this.props.fetchAllNotes(this.props.currentNotebook.id);
    this.props.fetchAllNotebooks();
  }

  render() {
    return (
      <div
        className='Main'>
          <Sidebar
            logOut={this.props.logOut}
            createNote={this.props.createNote}
            handleShowBarSelect={this.handleShowBarSelect}
            currentUser={this.props.currentUser}
            setCurrentNotebook={this.props.setCurrentNotebook}
            currentNotebookId={this.props.currentNotebookId}/>

          <Switch>
            <ProtectedRoute
              exact path='/dashboard/notebooks'
              component={
                () => <ShowPage
                formType="Notebooks"
                currentNote={this.props.currentNote}
                notebooks={this.props.notebooks}
                openModal={this.props.openModal}
                closeModal={this.props.closeModal}
                setCurrentNotebook={this.props.setCurrentNotebook}
                fetchAllNotebooks={this.props.fetchAllNotebooks}/> }/>

              <ProtectedRoute
                exact path='/dashboard/tags'
                component={
                  () => <ShowPage
                  formType="Tags"
                  notebooks={this.props.notebooks}
                  openModal={this.props.openModal}
                  closeModal={this.props.closeModal}/> }/>

              <ProtectedRoute
                path='/dashboard'
                component={NotePanel}/>

              <Redirect to="/Dashboard" />
          </Switch>
      </div>
    );
  }
}

export default Main;
