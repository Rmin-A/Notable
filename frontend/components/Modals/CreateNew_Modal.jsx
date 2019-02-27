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
        className="Modal-Box"
        onClick={ e => e.stopPropagation() }>
        <div
          className="Modal-Box-Header">
          <div
            className="Modal-Box-Header-Navbar">
            <div>
              {`Create new ${props.type}`}
            </div>
            <button
              onClick={handleClose()}>
              X
            </button>
          </div>
          <div
            className="Modal-Box-Header-Navbar">
            Notebooks are useful for grouping notes around a common topic.
            But Notable Tag system is way cooler than notebooks :)
          </div>
        </div>
        <div
          className="Modal-Box-Form">
          <form
            onSubmit={handleSubmit()}>
            <div>
              <div>
                Name
              </div>
              <input
                placeholder={`Enter ${props.type} name`}>
              </input>
            </div>
            <div
              className="Modal-Box-Form-Buttons">
              <button
                className="Modal-Box-Form-Buttons-Cancel"
                onClick={handleClose()}>
                Cancel
              </button>
              <button
                className="Modal-Box-Form-Buttons-Submit"
                disabled={true}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default createNewModal;
