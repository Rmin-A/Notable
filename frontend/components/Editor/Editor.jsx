import React, { Component }from 'react';
import ReactQuill from 'react-quill';

import TagBar from '../TagBar/TagBar_Container';
import ActionBar from '../ActionBar/ActionBar_Container';

class Editor extends Component {
  state = {
    title: null,
    text: null,
  }

  handleChange = (key) => {
    return (e) => {
      let newState = Object.assign({}, this.state);
      newState[key] = e;
      this.setState(newState);
    }
  }

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
                value={ this.state.text }
                onChange={ this.handleChange('text') }
                modules={ modules }
                placeholder="Start writing..."
                />
            </div>
            <div
              className="Editor-Quill-Title">
              <ReactQuill
                value={ this.state.title }
                onChange={ this.handleChange('title') }
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
    )
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
