import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link
              to="/notes/new">
              New Note
            </Link>
          </button>
          <Link
            to="/notes">
            All Notes
          </Link>
          <button
            onClick={props.logOut}>
            Log out
          </button>
        </div>
      </div>
  );
};

export default sideBar;
