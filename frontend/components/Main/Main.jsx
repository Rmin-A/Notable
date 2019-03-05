import React, { Component }
  from 'react';
import { Switch, Redirect }
  from 'react-router-dom';

import { ProtectedRoute }
  from '../../utils/route_api_util';
import Sidebar
  from '../Sidebar/Sidebar';
import NotebooksPanel
  from '../NotebooksPanel/NotebooksPanel_Container';
import NotePanel
  from '../NotePanel/NotePanel_Container';

class Main extends Component {

  render() {
    return (
      <div
        className='Main'>
          <Sidebar
            logOut={this.props.logOut}
            createNote={this.props.createNote}
            setCurrentNote={this.props.setCurrentNote}
            setCurrentNotebook={this.props.setCurrentNotebook}
            currentUser={this.props.currentUser}
            currentNotebookId={this.props.currentNotebookId}/>
          <Switch>
            <ProtectedRoute
              exact path='/dashboard/notebooks'
              component={NotebooksPanel}/>

            <ProtectedRoute
              exact path='/dashboard/notebooks/:notebookId/notes'
              component={NotePanel}/>

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

//
// <ProtectedRoute
//   exact path='/dashboard/tags'
//   component={ShowPage}/>
