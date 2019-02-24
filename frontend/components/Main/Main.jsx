import React, { Component } from 'react';
import { merge } from 'lodash';

import { ProtectedRoute } from '../../utils/route_util';
import { fetchAllNotes } from '../../actions/note_actions';

import Sidebar  from '../Sidebar/Sidebar';
import ShowBar  from '../ShowBar/ShowBar';
import Editor   from '../Editor/Editor_Container';

class Main extends Component {

    state = {
      showBarType: "All Notes",
    }

  componentDidMount() {
    this.props.fetchAllNotes();
    if (!this.props.currentNoteChanges) {
      clearInterval(this.props.intervalId);
    }
  }

  componentDidUpdate() {
    let that = this;
    if(that.props.currentNoteChanges && !that.props.intervalId) {
      that.interval = setInterval( () => console.log('hello'), 6000);
      that.props.setIntervalRefrence(that.interval);
    }
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

  handleShowBarSelect = (id) => {
    const that = this;
    const note = that.props.notes[id];
    if (that.props.currentNote.id) {
      that.props.updateNote(that.props.currentNote);
    }
    that.props.setCurrentNote(note);
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
          component={Editor} />
      </div>
    );
  }
}

export default Main;
