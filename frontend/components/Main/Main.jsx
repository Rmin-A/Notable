import React, { Component } from 'react';
import { merge } from 'lodash';

import { ProtectedRoute } from '../../utils/route_util';
import { fetchAllNotes } from '../../actions/note_actions';

import Sidebar  from '../Sidebar/Sidebar';
import ShowBar  from '../ShowBar/ShowBar';
import Editor   from '../Editor/Editor_Container';
import AllNotebooks   from '../ShowPage/ShowPage';

class Main extends Component {

    state = {
      showBarType: "All Notes",
    }

  componentDidMount() {
    this.props.fetchAllNotes();
    this.props.fetchAllNotebooks();
  }

  componentDidUpdate(prevProps, prevState) {

  }

  handleUpdate = (intervalId) => {
    let that = this;
    that.props.updateNote(that.props.currentNote).then(
      () => that.props.clearIntervalId(intervalId)
    )
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
      this.handleUpdate(that.props.intervalId)
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
          exact path='/client/notebooks'
          component={
            () => <AllNotebooks
            notebooks={this.props.notebooks}/> } />

        <ProtectedRoute
          exact path='/client/notes'
          component={
          () => <ShowBar
            list={this.handleShowBarProps()}
            handleShowBarSelect={this.handleShowBarSelect}
            selectedNoteId={this.props.currentNote.id} /> } />

        <ProtectedRoute
          exact path='/client/notes'
          component={Editor} />
      </div>
    );
  }
}

export default Main;
