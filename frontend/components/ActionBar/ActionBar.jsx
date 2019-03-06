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
            src={window.staticImages.notebook}/>
        </div>
        <div>
          {
            (props.currentNote.notebook_name) ?
              props.currentNote.notebook_name
            :
              props.currentNotebook.name
          }
        </div>
      </div>
      <div
        className="ActionBar-Right">
        <img
          src={window.staticImages.dotsMenu}
          onClick={() => props.openModal('Corner_Menu')}/>
      </div>
    </div>
  );
};

export default actionBar;
