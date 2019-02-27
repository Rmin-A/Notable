import React from 'react';

const createNewModal = (props) => {

  const handleClose = () => {
    return (e) => {
      e.preventDefault();
      props.closeModal();
    };
  };

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault();
      props.handleSubmit({ name: e.target.currentvalue});
      props.closeModal();
    };
  };

  return(
      <div
        className="Modal-Forground-Box">
        <div
          className="Modal-Forground-Header">
          <div>
            {`Create new ${props.type}`}
          </div>
          <button
            onClick={handleClose()}>
            X
          </button>
        </div>
        <div
          className="Modal-Forground-Title">
          Notebooks are useful for grouping notes around a common topic.
          But Notable Tag system is way cooler than notebooks :)
        </div>
        <div
          className="Modal-Forground-Form">
          <form
            onSubmit={handleSubmit()}>
            <input
              placeholder={`Enter ${props.type} name`}>
            </input>
          </form>
        </div>
      </div>
  );
};

export default createNewModal;
