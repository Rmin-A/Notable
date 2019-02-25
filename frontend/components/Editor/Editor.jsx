import React, { Component }from 'react';
import ReactQuill from 'react-quill';

import TagBar from '../TagBar/TagBar_Container';
import ActionBar from '../ActionBar/ActionBar';

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
            currentNote={props.currentNote}/>
        </div>
        <div
          className="Editor-Quill">
          <div
            className="Editor-Quill-Body">
            <ReactQuill
              value={props.currentNote.body}
              onChange={props.updateCurrentNoteBody}
              modules={ modules }
              placeholder="Start writing..."
              />
          </div>
          <div
            className="Editor-Quill-Title">
            <ReactQuill
              value={props.currentNote.name}
              onChange={props.updateCurrentNoteTitle}
              modules={ { toolbar: "" } }
              placeholder="Title"
              />
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
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  ["bold", "italic"], // toggled buttons
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  ["blockquote", "code-block"],
  [{ align: [] }],
  [{ list: "ordered" }, { list: "bullet" }],

  ["link", "image", "video"] // misc
];

const modules = {
  toolbar: toolBarOpts
};

export default editor;
