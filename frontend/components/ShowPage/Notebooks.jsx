import React from 'react';

const notebooks = (props) => {

  const handleDateRender = (date) => {
    const months = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };

    let updateDate = new Date(date);
    return `${months[updateDate.getMonth()]} ${updateDate.getDay()}`;
  };

  const notebooksRender= () => {
    let items = [];
    if (Object.keys(props.notebooks).length > 0) {
      Object.keys(props.notebooks).forEach ( (key) => {
        items.push(
          <div
            className="Notebook-Box"
            key={key}>

            <div
                className="Notebook-Box-Title">
              <div
                className="Notebook-Box-Image">
                <img
                  src={window.staticImages.notebook}>
                </img>
              </div>
              <div
                className="Notebook-Box-Text">
                {props.notebooks[key].name}
              </div>
            </div>

            <div
              className="Notebook-Box-Date">
              {handleDateRender(props.notebooks[key].updated_at)}
            </div>

          </div>
        );
      });
    }
    return items;
  };

  return (
    <div
      className="Notebooks Notebooks-Header">
      <div
        className="Notebook-Box Notebook-Box-Header">
        <div
            className="Notebook-Box-Title">
          <div
            className="Notebook-Box-Text">
            Name
          </div>
        </div>
        <div
          className="Notebook-Box-Date">
          Last update
        </div>

      </div>
      {notebooksRender()}
    </div>
  );
};

export default notebooks;
