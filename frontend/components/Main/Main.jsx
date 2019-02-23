import React, { Component } from 'react';
import { merge } from 'lodash';

import { ProtectedRoute } from '../../utils/route_util';
import { fetchAllNotes } from '../../actions/note_actions';

import Sidebar  from '../Sidebar/Sidebar';
import ShowBar  from '../ShowBar/ShowBar_Container';
import Editor   from '../Editor/Editor';

class Main extends Component {

    state = {
      showBarType: "All Notes",
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

  // handleShowBarSelect = (id) => {
  //   let that = this;
  //   let newState = merge({}, that.state, { selectedNote: that.props.notes[id] });
  //   that.setState(newState);
  // }

  handleShowBarSelect = (id) => {
    const that = this;
    const note = that.props.notes[id];
    that.props.setCurrentNote(note);
  }

  handleEditorSetState = (key, value) => {
    let that = this;
    let newState = Object.assign( {}, that.state );
    newState.selectedNote[key] = value;
    that.setState(newState);
  }

  render() {
    return (
      <div
        className='Main'>
        <Sidebar
          logOut={this.props.logOut}
          createNote={this.props.createNote}
          handleShowBarSelect={this.handleShowBarSelect}
          currentUser={this.props.currentUser} />

        <ProtectedRoute
          exact path='/notes'
          component={
          () => <ShowBar
            list={this.handleShowBarProps()}
            handleShowBarSelect={this.handleShowBarSelect}
            selectedNoteId={this.props.currentNote.id} /> } />

        <ProtectedRoute
          exact path='/notes'
          component={
          () => <Editor
            selectedNote={this.props.currentNote}
            handleEditorSetState={this.handleEditorSetState} /> } />
      </div>
    );
  }
}

export default Main;
