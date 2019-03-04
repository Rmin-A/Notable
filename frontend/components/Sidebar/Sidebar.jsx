import React
  from 'react';
import { Link }
  from 'react-router-dom';

const sideBar = (props) => {

  const _nullNote = {
    name: null,
    boddy: null,
    notebook_id: props.currentNotebookId
  };

  const handleNewNote = () => {
    return (e) => {
      e.preventDefault();
      props.createNote(_nullNote).then(
        (payload) => props.handleShowBarSelect(
          parseInt(Object.keys(payload.note)[0])
        )
      );
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
        </div>

        <div
          className="Sidebar-Menu">
          <button
            className="Sidebar-New-Note"
            onClick={handleNewNote()}>
            <img
              src= {window.staticImages.new}>
            </img>
            New Note
          </button>

          <button>
            <Link
              to={
                `/dashboard/notebooks/${props.currentUser.general_notebook_name}/notes`}>
              All Notes
            </Link>
          </button>

          <button>
            <Link
              to="/dashboard/notebooks">
              All Notebooks
            </Link>
          </button>

          <button>
            <Link
              to="/dashboard/tags">
              All Tags
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
