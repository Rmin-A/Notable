import React from 'react';
import { Link } from 'react-router-dom';

const sideBar = (props) => {

  const handleNewNote = () => {
    return (e) => {
      e.preventDefault();
      props.createNote();
    };
  };

  return(
      <div
        className="Sidebar">
        <div
          className="Sidebar-User">
          Hi {props.currentUser.username}
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
              to="/notes/new"
              onClick={ handleNewNote() }>
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
