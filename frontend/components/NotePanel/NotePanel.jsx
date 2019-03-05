import React from 'react';

import ShowBar
  from '../ShowBar/ShowBar';
import Editor
  from '../Editor/Editor_Container';

const notePanel = (props) => {

  if (!props.currentNote.id && props.notes.length > 0) {
    props.setCurrentNote( ( props.notes.length === 0 ) ? {} : props.notes[0]);
  }

  return (
    <div
      className="NotePanel">
      <ShowBar
        notes={props.notes}
        currentNote={props.currentNote}
        currentNotebook={props.currentNotebook}
        updateNote={props.updateNote}
        setCurrentNote={props.setCurrentNote} />
    </div>
  );
};

export default notePanel;
