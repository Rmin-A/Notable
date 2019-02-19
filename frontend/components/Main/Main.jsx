import React, { Component } from 'react';

import { ProtectedRoute } from '../../utils/route_util';
import { fetchAllNotes } from '../../actions/note_actions';

import Sidebar  from '../Sidebar/Sidebar_Container';
import ShowBar  from '../ShowBar/ShowBar_Container';
import Editor   from '../Editor/Editor_Container';

//to avoid sending too many ajaxes i think we should keep the data
//here and in component will receive props, send the update too notes.

class Main extends Component {

  state = {
    showBarType: "All Notes"
  }

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  handleShowBarProps = () => {
    let items = {
      type: null,
      data: null
    }
    switch ( this.state.showBarType ) {
      case "All Notes":
        items.type = "All Notes";
        items.data = this.props.notes;
      break;
      case "Notebook":
      break;
      case "Tag":
      break;
      default:
      break;
    }
    return items;
  }

  render() {
    return (
      <div
        className='Main'>
        <Sidebar logOut={this.props.logOut} />

        <ProtectedRoute
          exact path='/notes'
          component={
            () => <ShowBar items={ this.handleShowBarProps() } />
          }
        />
        <ProtectedRoute
          exact path='/notes'
          component={ Editor }
        />
      </div>
    );
  }
}

export default Main;
