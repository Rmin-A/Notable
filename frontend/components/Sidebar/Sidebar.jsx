import React from 'react';

const sideBar = (props) => {
  return(
    <div
      className="Main">

      <div
        className="Main-Sidebar">
        <div
          className="Main-Sidebar-User">
          Hi {}
        </div>
        <div
          className="Main-Sidebar-Searchbar">
          this is the search bar
        </div>
        <div
          className="Main-Sidebar-Menu">
          <button
            className="Main-Sidebar-New-Note">
            <img
              src= { window.staticImages.new }>
            </img>
            New Note
          </button>
          <button
            onClick={props.logOut}>
            Log out
          </button>
        </div>
      </div>

      <div
        className="Main-List">
        this is the list bar
      </div>

      <div
        className="Main-Editor">
        this is the editor
      </div>

    </div>
  );
};

export default sideBar;
