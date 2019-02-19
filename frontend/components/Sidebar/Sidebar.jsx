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
            className="Sidebar-New-Note"
            onClick={ handleNewNote() }>
            <img
              src= { window.staticImages.new }>
            </img>
            New Note
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
