import React, { Component }
  from 'react';

import Notebooks
  from './Notebooks';
import Tags
  from './Tags';

class ShowPage extends Component {

  handleChildCompnentRender = () => {
    if(this.props.formType === "Notebooks") {
      return(
        <Notebooks
          notebooks={this.props.notebooks}
          setCurrentNotebook={this.props.setCurrentNotebook}
          setCurrentNote={this.props.setCurrentNote}/>
      );
    } else {
      return(
        <Tags />
      );
    }
  };

  handleOnClick = () => {

    return (e) => {
      e.preventDefault();
      if(this.props.formType === "Notebooks") {
        this.props.openModal("Notebook");
      } else {
        this.props.openModal("Tag");
      }
    };
  };

  render() {
    return(
      <div
        className="ShowPage">
        <div
          className="ShowPage-Header">
          <div
            className="ShowPage-Header-Title">
            {this.props.formType}
          </div>
        </div>
        <div
          className="ShowPage-Footer">
          <div
            className="ShowPage-Footer-left">
            {
              (this.props.formType === 'Notebooks') ?
                "My notebook list"
              :
                "My tag list"
            }
          </div>
          <div
            className="ShowPage-Footer-right">
            <button
              className="ShowPage-Add"
              onClick={this.handleOnClick()}>
              <img
                src= {window.staticImages.add}>
              </img>
              {
                (this.props.formType === 'Notebooks') ?
                  "New notebook"
                :
                  "New tags"
              }
            </button>
          </div>
        </div>
        <div
          className="ShowPage-Content">
          {this.handleChildCompnentRender()}
        </div>
      </div>
    )
  }
};

export default ShowPage;
