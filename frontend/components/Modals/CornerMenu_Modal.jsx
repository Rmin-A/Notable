import React
  from 'react';

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
          onClick={handleRedirect("Notebook_Move")}>
          Move to...
        </div>
        <div>
          Add shortcut...
        </div>
        <div
          onClick={handleRedirect("Notebook_Delete")}>
          Delete note...
        </div>
    </div>
  );
};

export default createNewModal;
