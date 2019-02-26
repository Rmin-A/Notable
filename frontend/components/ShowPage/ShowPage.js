import React from 'react';

const showPage = (props) => {
  return(
    <div
      className="ShowPage">
      <div
        className="ShowPage-Header">
        <div
          className="ShowPage-Header-Title">
          {props.formType}
        </div>
      </div>
      <div
        className="ShowPage-Footer">
        <div
          className="ShowPage-Footer-left">
          {(props.formType === 'Notebooks') ? "My notebook list" : "My tag list"}
        </div>
        <div
          className="ShowPage-Footer-right">
          <button
            className="ShowPage-Add">
            <img
              src= { window.staticImages.add }>
            </img>
            {(props.formType === 'Notebooks') ? "New notebook" : "New tags"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default showPage;
