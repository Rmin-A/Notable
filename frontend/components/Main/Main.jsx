import React, { Component }
  from 'react';
import { merge }
  from 'lodash';
import {
  Switch }
  from 'react-router-dom';

import { ProtectedRoute }
  from '../../utils/route_api_util';
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
    this.props.fetchAllNotes(null);
    this.props.fetchAllNotebooks();
  }

  componentDidUpdate() {}

  //   componentDidUpdate(prevProps) {
  //     if (prevProps.currentNotebookId !== this.props.currentNotebookId) {
  //       this.props.fetchAllNotes(this.props.currentNotebookId)
  //     }
  //   }
  //
  // handleUpdate = (intervalId) => {
  //   let that = this;
  //   that.props.updateNote(that.props.currentNote);
  // }

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
          path='/dashboard'
          component={
            () => <ShowBar
            notes={this.props.notes}
            currentNote={this.props.currentNote}
            currentNotebookId={this.props.currentNotebookId}
            updateNote={this.props.updateNote}
            setCurrentNote={this.props.setCurrentNote} /> } />

        <ProtectedRoute
          path='/dashboard'
          component={Editor} />

      </div>
    );
  }
}

export default Main;



/**
<Switch>
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


</Switch>

<ProtectedRoute
  exact path='/client/notes'
  component={Editor} />

<ProtectedRoute
  path='/client/notebooks/:notebook_id/notes'
  component={Editor} />

*/
