import React, { Component }from 'react';
import ReactQuill from 'react-quill';

import TagBar from '../TagBar/TagBar_Container';
import ActionBar from '../ActionBar/ActionBar_Container';

class Editor extends Component {

  state = {
    id: null,
    name: null,
    body: null,
  };

  componentDidMount() {
    this.setState( this.props.selectedNote );
    // this.interval = setInterval( () => {
    //   alert('this is auto save')
    // }, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleState = (key) => {
    return (e) => {
      let newState = Object.assign({}, this.state);
      newState[key] = e;
      this.setState(newState);
      // this.props.handleEditorSetState(key, e)
    }
  }

  handleAutoSave = () => {

  }

  render() {
        debugger
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
                value={ this.state.body }
                onChange={ this.handleState('body') }
                modules={ modules }
                placeholder="Start writing..."
                />
            </div>
            <div
              className="Editor-Quill-Title">
              <ReactQuill
                value={ this.state.name }
                onChange={ this.handleState('name') }
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
