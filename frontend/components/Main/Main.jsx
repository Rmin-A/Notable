import React, { Component }
  from 'react';
import { merge }
  from 'lodash';

import { ProtectedRoute }
  from '../../utils/route_util';
import { fetchAllNotes }
  from '../../actions/note_actions';
import Sidebar
  from '../Sidebar/Sidebar';
import ShowBar
  from '../ShowBar/ShowBar';
import Editor
  from '../Editor/Editor_Container';
import ShowPage
  from '../ShowPage/ShowPage';

class Main extends Component {

  componentDidMount() {
    this.props.fetchAllNotes();
    this.props.fetchAllNotebooks();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentNotebook
      && this.props.currentNotebook
      && prevProps.currentNotebook.id !== this.props.currentNotebook.id
    ){
      this.props.fetchAllNotes(this.props.currentNotebook.id);
    }
    if (
      !prevProps.currentNotebook
      && this.props.currentNotebook
    ){
      this.props.fetchAllNotes(this.props.currentNotebook.id);
    }
    if (
      prevProps.currentNotebook
      && !this.props.currentNotebook
    ){
      this.props.fetchAllNotes();
    }
  }

  handleUpdate = (intervalId) => {
    let that = this;
    that.props.updateNote(that.props.currentNote).then(
      () => that.props.clearIntervalId(intervalId)
    )
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
          currentUser={this.props.currentUser}
          currentNotebookId={this.props.currentNotebookId}/>

        <ProtectedRoute
          exact path='/client/notes'
          component={
            () => <ShowBar
            type="All Notes"
            notes={this.props.notes}
            handleShowBarSelect={this.handleShowBarSelect}
            selectedNoteId={this.props.currentNote.id} /> } />

        <ProtectedRoute
          exact path='/client/notebooks/:notebook_id/notes'
          component={
            () => <ShowBar
            type={`${this.props.currentNotebook.name}`}
            notes={this.props.notes}
            handleShowBarSelect={this.handleShowBarSelect}
            selectedNoteId={this.props.currentNote.id} /> } />

        <ProtectedRoute
          exact path='/client/notebooks'
          component={
            () => <ShowPage
            formType="Notebooks"
            currentNote={this.props.currentNote}
            notebooks={this.props.notebooks}
            openModal={this.props.openModal}
            closeModal={this.props.closeModal}
            setCurrentNotebook={this.props.setCurrentNotebook}
            fetchAllNotebooks={this.props.fetchAllNotebooks}/> } />

        <ProtectedRoute
          exact path='/client/tags'
          component={
            () => <ShowPage
            formType="Tags"
            notebooks={this.props.notebooks}
            openModal={this.props.openModal}
            closeModal={this.props.closeModal}/> } />

        <ProtectedRoute
          path='/client'
          component={Editor} />
      </div>
    );
  }
}

export default Main;
