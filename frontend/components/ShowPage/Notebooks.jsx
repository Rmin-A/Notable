import React
  from 'react';
import { Link, Redirect }
  from 'react-router-dom';

const notebooks = (props) => {

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

  const handleClick = (notebook) => {
    return (e) => {
      if (props.formType === "modal") {
        e.preventDefault();
        let note = Object.assign({}, props.currentNote);
        note.notebook_id = notebook.id;
        props.onCLick(note).then(
          (payload) =>
            props.setCurrentNote(Object.values(payload.note)[0])
        );
        props.closeModal();
      } else {
        props.setCurrentNote({});
        props.setCurrentNotebook(notebook);
        return false;
      }
    };
  };

  const notebooksRender= () => {
    let items = [];
    if (Object.keys(props.notebooks).length > 0) {
      Object.keys(props.notebooks).forEach(
        (key) => {
          items.push(
            <Link
              to={`/dashboard/notebooks/${props.notebooks[key].id}/notes`}
              key={key}>
              <div
                className="Notebook-Box"
                onClick={handleClick(props.notebooks[key])}>
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
                      `${props.notebooks[key].name}

                       (${props.notebooks[key].number_of_notes})`
                    }
                  </div>
                </div>
                <div
                  className="Notebook-Box-Date">
                  {handleDateRender(props.notebooks[key].updated_at)}
                </div>
              </div>
            </Link>
          );
        }
      );
    }
    return items;
  };

  return (
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
  );
};

export default notebooks;
