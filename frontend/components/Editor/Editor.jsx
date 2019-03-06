import React, { Component }
  from 'react';
import ReactQuill
  from 'react-quill';

import TagBar
  from '../TagBar/TagBar_Container';
import ActionBar
  from '../ActionBar/ActionBar';

const editor = (props) => {
  return(
    <div
      className="Editor">
      <div
        className="Editor-top">
        <div
          className="Editor-ActionBar">
          <ActionBar
            notebooks={props.notebooks}
            currentNote={props.currentNote}
            openModal={props.openModal}
            currentNotebook={props.currentNotebook}/>
        </div>
        <div
          className="Editor-Quill">
          <div
            className="Editor-Quill-Body">
            <ReactQuill
              value={props.currentNote.body}
              onChange={props.updateCurrentNoteBody}
              modules={ modules }
              placeholder="Start writing..."/>
          </div>
          <div
            className="Editor-Quill-Title">
            <ReactQuill
              value={props.currentNote.name}
              onChange={props.updateCurrentNoteTitle}
              modules={ { toolbar: "",  clipboard: {
                  matchVisual: false,
                } } }
              placeholder="Title"/>
          </div>
        </div>
      </div>
      <div
        className="Editor-Bottom">
        <TagBar />
      </div>
    </div>
  );
};

const toolBarOpts = [
  [{ font: [] }],
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic"],
  [{ color: [] }, { background: [] }],
  ["blockquote", "code-block"],
  [{ align: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link", "image", "video"]
];

const modules = {
  toolbar: toolBarOpts,
  clipboard: {
    matchVisual: false,
  }
};

export default editor;
