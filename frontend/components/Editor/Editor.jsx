import React, { Component }from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor extends Component {
  state={

  }

  render() {
    return(
      <div>
        <ReactQuill value={this.state.text}
                    onChange={this.handleChange} />
      </div>
    )
  }
}

export default Editor;
