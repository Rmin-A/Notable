import React from 'react';

const createNewModal = (props) => {

  const handleRedirect = (modal) => {
    return (e) => {
      e.stopPropagation();
      e.preventDefault();
      props.openModal(modal);
    };
  };

  return(
      <div
        className="Corner-Menu">
          <div
            className=""
            onClick={handleRedirect("Notebook_Move")}>
            Move to...
          </div>
          <div
            className="">
            Add shortcut...
          </div>
          <div
            className=""
            onClick={handleRedirect("Notebook_Delete")}>
            Delete note...
          </div>

      </div>
  );
};

export default createNewModal;
