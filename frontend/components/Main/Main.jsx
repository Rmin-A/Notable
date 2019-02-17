import React, { Component } from 'react';

import Sidebar  from '../Sidebar/Sidebar_Container';
import ShowBar from '../ShowBar/ShowBar_Container';
import Editor from '../Editor/Editor_Container';

class Main extends Component {

  render() {
    return (
      <div
        className='Main'>
        <Sidebar logOut={this.props.logOut}/>
        <ShowBar />
        <Editor />
      </div>
    );
  }
}

export default Main;
