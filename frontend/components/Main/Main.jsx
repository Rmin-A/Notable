import React, { Component } from 'react';
import { merge } from 'lodash';

import { ProtectedRoute } from '../../utils/route_util';
import { fetchAllNotes } from '../../actions/note_actions';

import Sidebar  from '../Sidebar/Sidebar_Container';
import ShowBar  from '../ShowBar/ShowBar_Container';
import Editor   from '../Editor/Editor_Container';

//to avoid sending too many ajaxes i think we should keep the data
//here and in component will receive props, send the update too notes.

class Main extends Component {

  state = {
    showBarType: "All Notes",
    editorNote: {
      id: null,
      name: null,
      body: null,
    }
  }

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  handleShowBarProps = () => {
    let list = {
      type: null,
      notes: null
    }
    switch ( this.state.showBarType ) {
      case "All Notes":
        list.type = "All Notes";
        list.notes = this.props.notes;
      break;
      case "Notebook":
      break;
      case "Tag":
      break;
      default:
      break;
    }
    
    return list;
  }

  handleShowBarSelect = (note) => {
    let newState = merge({}, this.state, {editorNote: note});
    this.setState(newState);
  }

  render() {
    debugger
    return (
      <div
        className='Main'>
        <Sidebar logOut={this.props.logOut} />

        <ProtectedRoute
          exact path='/notes'
          component={
            () => <ShowBar
                    list={this.handleShowBarProps()}
                    handleItemSelect={ this.handleShowBarSelect }
                  />
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
