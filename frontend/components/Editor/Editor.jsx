  import React, { Component }from 'react';
  import ReactQuill from 'react-quill';

class Editor extends Component {
  state = {
    text: null,
  }

  handleChange = () => {
    return (e) => {
      let newState = Object.assign({}, this.state);
      newState.text = e;
      this.setState(newState);
    }
  }

  render() {
    return(
      <div
        className="Editor">
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange()}
          modules={modules}
        />
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
