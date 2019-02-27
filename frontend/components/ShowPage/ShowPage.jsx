import React from 'react';

import Notebooks from './Notebooks';
import Tags from './Tags';

const showPage = (props) => {

  const handleChildCompnentRender = () => {
    if(props.formType === "Notebooks") {
      return(
        <Notebooks
          notebooks={props.notebooks}/>
      );
    } else {
      return(
        <Tags />
      );
    }
  };

  const handleOnClick = () => {
    
    return (e) => {
      e.preventDefault();
      if(props.formType === "Notebooks") {
        props.openModal("Notebook");
      } else {
        props.openModal("Tag");
      }
    };
  };

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
          { (props.formType === 'Notebooks') ? "My notebook list" : "My tag list" }
        </div>
        <div
          className="ShowPage-Footer-right">
          <button
            className="ShowPage-Add"
            onClick={handleOnClick()}>
            <img
              src= { window.staticImages.add }>
            </img>
            { (props.formType === 'Notebooks') ? "New notebook" : "New tags" }
          </button>
        </div>
      </div>
      <div
        className="ShowPage-Content">
        { handleChildCompnentRender() }
      </div>
    </div>
  );
};

export default showPage;
