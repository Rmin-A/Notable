import React
  from 'react';
import { Link, Redirect }
  from 'react-router-dom';

const notebooksPanel = (props) => {

  const handleDateRender = (date) => {

    const months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };

    let updateDate = new Date(date);
    return (
      `${months[updateDate.getMonth()]} ${updateDate.getDay()}`
    );
  };

  const notebooksRender= () => {
    let items = [];
    if (Object.keys(props.notebooks).length > 0) {
      Object.keys(props.notebooks).forEach(
        (key) => {
          let notebook = props.notebooks[key];
          items.push(
            <Link
              to={`/dashboard/notebooks/${notebook.id}/notes`}
              key={key}>
              <div
                className="Notebook-Box"
                onClick={ () => props.clickHandler(notebook)}>
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
                    {
                      `${notebook.name}

                      (${notebook.number_of_notes})`
                    }
                  </div>
                </div>
                <div
                  className="Notebook-Box-Date">
                  {handleDateRender(notebook.updated_at)}
                </div>
              </div>
            </Link>
          );
        }
      );
    }
    return items;
  };

  const handleModalRender = () => {
    if (!props.className) {
      return (
        <div>
          <div
            className="ShowPage-Header">
            <div
              className="ShowPage-Header-Title">
              Notebooks
            </div>
          </div>
          <div
            className="ShowPage-Footer">
            <div
              className="ShowPage-Footer-left">
              My notebook list
            </div>
            <div
              className="ShowPage-Footer-right">
              <button
                className="ShowPage-Add"
                onClick={ () => props.openModal('Notebook')}>
                <img
                  src= {window.staticImages.add}>
                </img>
                New notebook
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className="ShowPage">
      {handleModalRender()}
      <div
        className="ShowPage-Content">
        <div
          className={
            `Notebooks Notebooks-Header

            ${
              (props.className) ?
                props.className
              :
                ""
            }`
          }>
          <div
            className="Notebook-Box Notebook-Box-Header">
            <div
              className="Notebook-Box-Title">
              <div
                className="Notebook-Box-Name">
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
      </div>
    </div>
  );
};

export default notebooksPanel;
