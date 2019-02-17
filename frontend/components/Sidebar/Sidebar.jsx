import React from 'react';

const sideBar = (props) => {
  return(
      <div
        className="Sidebar">
        <div
          className="Sidebar-User">
          Hi {}
        </div>
        <div
          className="Sidebar-Searchbar">
          this is the search bar
        </div>
        <div
          className="Sidebar-Menu">
          <button
            className="Sidebar-New-Note">
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
  );
};

export default sideBar;
