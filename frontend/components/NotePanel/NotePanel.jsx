import React, { Component }
  from 'react';

import ShowBar
  from '../ShowBar/ShowBar';
import Editor
  from '../Editor/Editor_Container';


class NotePanel extends Component {
  render() {
    if (Object.keys(this.props.notes).length === 0 ) {
      return <div></div>;
    }

    return (
      <div
        className="NotePanel">
        <ShowBar
          notes={this.props.notes}
          currentNote={this.props.currentNote}
          currentNotebook={this.props.currentNotebook}
          updateNote={this.props.updateNote}
          setCurrentNote={this.props.setCurrentNote} />

        <Editor />
      </div>
    );
  }
}

export default NotePanel;
