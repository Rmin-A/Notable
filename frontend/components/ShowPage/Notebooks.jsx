import React from 'react';

const notebooks = (props) => {

  const notebooksRender= () => {
    let items = [];
    if (Object.keys(props.notebooks).length > 0) {
      Object.keys(props.notebooks).forEach ( (key) => {
        items.push(
          <div
            className="Notebook_Box"
            key={key}>
            <div>
            </div>
          </div>
        );
      });
    }
    return items;
  };

  return (
    <div
      className="Notebooks">
      {notebooksRender()}
    </div>
  );
};

export default notebooks;
