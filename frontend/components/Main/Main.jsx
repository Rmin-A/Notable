import React, { Component } from 'react';

import { ProtectedRoute } from '../../utils/route_util';
import { fetchAllNotes } from '../../actions/note_actions';

import Sidebar  from '../Sidebar/Sidebar_Container';
import ShowBar  from '../ShowBar/ShowBar_Container';
import Editor   from '../Editor/Editor_Container';

class Main extends Component {

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  render() {
    return (
      <div
        className='Main'>
        <Sidebar logOut={this.props.logOut}/>

        <ProtectedRoute exact path='/notes' component={ ShowBar } />
        <ProtectedRoute path='/notes' component={ Editor } />
      </div>
    );
  }
}

export default Main;
