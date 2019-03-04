import React, { Component }
  from 'react';

import ShowBar
  from '../ShowBar/ShowBar';
import Editor
  from '../Editor/Editor_Container';


class NotePanel extends Component {
  render() {
    return (
      <div>
        <Showbar
          logOut={this.props.logOut}
          createNote={this.props.createNote}
          handleShowBarSelect={this.handleShowBarSelect}
          currentUser={this.props.currentUser}
          currentNotebookId={this.props.currentNotebookId} />

        <Editor />
      </div>
    );
  }
}

export default NotePanel;
