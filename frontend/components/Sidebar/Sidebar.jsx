import React from 'react';
import { Link } from 'react-router-dom';

const sideBar = (props) => {

  const handleNewNote = () => {
    return (e) => {
      e.preventDefault();
      props.createNote()
      .then(
        (payload) => props.handleShowBarSelect(parseInt(Object.keys(payload.note)[0])));
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
            className="Sidebar-New-Note"
            onClick={ handleNewNote() }>
            <img
              src= { window.staticImages.new }>
            </img>
            New Note
          </button>
          <button>
            <Link
              to="/client/notes">
              All Notes
            </Link>
          </button>
          <button>
            <Link
              to="/client/notebooks">
              All Notebooks
            </Link>
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
