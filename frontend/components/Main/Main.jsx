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
            setCurrentNote={this.props.setCurrentNote}
            currentUser={this.props.currentUser}
            currentNotebookId={this.props.currentNotebookId}/>
          <ProtectedRoute
            exact path='/dashboard'
            component={NotePanel}/>
      </div>
    );
  }
}

export default Main;
