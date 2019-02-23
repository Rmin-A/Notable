import React, { Component }from 'react';
import ReactQuill from 'react-quill';

import TagBar from '../TagBar/TagBar_Container';
import ActionBar from '../ActionBar/ActionBar_Container';

class Editor extends Component {

  // state = {
  //   id: null,
  //   name: null,
  //   body: null,
  // };

  // componentDidMount() {
  //   this.setState( this.props.selectedNote );
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  // handleState = (key) => {
  //   return (e) => {
  //     let newState = Object.assign({}, this.state);
  //     newState[key] = e;
  //     this.setState(newState);
  //   }
  // }

  // handleAutoSave = () => {
  //
  // }

  render() {
    return(
      <div
        className="Editor">
        <div
          className="Editor-top">
          <div
            className="Editor-ActionBar">
            <ActionBar />
          </div>
          <div
            className="Editor-Quill">
            <div
              className="Editor-Quill-Body">
              <ReactQuill
                value={this.props.currentNote.body}
                onChange={this.props.updateCurrentNoteBody}
                modules={ modules }
                placeholder="Start writing..."
                />
            </div>
            <div
              className="Editor-Quill-Title">
              <ReactQuill
                value={this.props.currentNote.name}
                onChange={this.props.updateCurrentNoteTitle}
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
  }
}

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

export default Editor;
