import React from 'react';

const actionBar = (props) => {
  return(
    <div
      className="ActionBar">
      <div
        className="ActionBar-Left">
        <div
          className="ActionBar-Left-Logo">
          <img
            src={window.staticImages.notebook} />
        </div>
        <div>
          {
             (Object.keys(props.notebooks).length > 0 && props.currentNote.id) ?
             props.notebooks[props.currentNote.notebook_id].name :
             null
          }
        </div>
      </div>
      <div
        className="ActionBar-Right">
        this is a menu
      </div>
    </div>
  );
};

export default actionBar;
