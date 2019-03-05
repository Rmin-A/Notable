import React, { Component }
  from 'react';
import { Switch, Redirect }
  from 'react-router-dom';

import { ProtectedRoute }
  from '../../utils/route_api_util';
import Sidebar
  from '../Sidebar/Sidebar';
import ShowPage
  from '../ShowPage/ShowPage';
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
            currentUser={this.props.currentUser}
            currentNotebookId={this.props.currentNotebookId}/>
      </div>
    );
  }
}

export default Main;


/**
render() {
  return (
    <div
      className='Main'>
        <Sidebar
          logOut={this.props.logOut}
          createNote={this.props.createNote}
          currentUser={this.props.currentUser}
          currentNotebookId={this.props.currentNotebookId}/>

        <Switch>
          <ProtectedRoute
            exact path='/dashboard/notebooks'
            component={ShowPage}/>

            <ProtectedRoute
              exact path='/dashboard/tags'
              component={ShowPage}/>

            <ProtectedRoute
              exact path='/dashboard/notebooks/:notebookId/notes'
              component={NotePanel}/>

            <ProtectedRoute
              exact path='/dashboard'
              component={NotePanel}/>

            <Redirect to="/Dashboard" />
        </Switch>
    </div>
  );
}
*/
