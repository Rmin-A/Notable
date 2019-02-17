import React, { Component } from 'react';

import { ProtectedRoute } from '../../utils/route_util';

import Sidebar  from '../Sidebar/Sidebar_Container';
import ShowBar  from '../ShowBar/ShowBar_Container';
import Editor   from '../Editor/Editor_Container';

class Main extends Component {

  render() {
    return (
      <div
        className='Main'>
        <Sidebar logOut={this.props.logOut}/>

        <ProtectedRoute exact path='/notes' component={ ShowBar } />
        <ProtectedRoute exact path='/notes' component={ Editor } />
        <ProtectedRoute path='/notes/new'   component={ Editor } />
      </div>
    );
  }
}

export default Main;
