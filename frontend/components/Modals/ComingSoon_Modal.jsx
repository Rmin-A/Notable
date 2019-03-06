import React
  from 'react';

const createNewModal = (props) => {

  const handleClose = () => {
    return (e) => {
      e.preventDefault();
      props.closeModal();
    };
  };

  return(
    <div
      className="Coming-Soon"
      onClick={e => e.stopPropagation()}>
        <div
          className="Modal-Box-Header-Navbar">
          Coming Soon!!!
        </div>
    </div>
  );
};

export default createNewModal;
