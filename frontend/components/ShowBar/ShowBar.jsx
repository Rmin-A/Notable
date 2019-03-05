import React, { Component }
  from 'react';
import htmlToText
  from 'html-to-text';


const showBar = (props) => {

  const handleCalculateUpdateHours = (date) => {
    var delta = Math.abs(new Date() - new Date(date)) / 1000;
    if (
      delta >= 86400
      && delta < 172800
    ) {
      return "A day ago";
    }
    if (
      delta >= 172800
    ) {
      var days = Math.floor(delta / 86400);
      return (days.toString() + " days ago");
    }
    if (
      delta >= 3600
      && delta < 7200
    ) {
      return "An hour ago";
    }
    if (
      delta >= 7200
      && delta < 86400
    ) {
      var hours = Math.floor(delta / 3600) % 24;
      return (hours.toString() + " hours ago");
    }
    return "Less than an hour ago";
  };

  const handleItemCount = () => {
    let count = props.notes.length;
    switch (count) {
      case undefined:
      return "";
      case 1:
      return "1 note";
      default:
      return `${count} notes`;
    }
  };

  const handleSelect = (note) => {
    return (e) => {
      props.updateNote(props.currentNote);
      props.setCurrentNote(note);
    };
  };

  const handleItems = () => {
    if ( props.notes.length === 0 || !props.currentNote.id ) {
      return [];
    }
    let itemBoxes = [];
    props.notes.reverse().forEach(
      (note) => {
        itemBoxes.push(
          <div
            className={
              (note.id === props.currentNote.id) ?
                "ShowBar-Item-Box ShowBar-Item-Box-Selected"
              :
                "ShowBar-Item-Box"
            }
            key={note.id}
            note-id={note.id}
            onClick={handleSelect(note)}>
            <div>
              <div
                className="ShowBar-Item-Title">
                {
                  (note.name) ?
                  htmlToText.fromString(note.name)
                  :
                  "Untitled"
                }
              </div>
              <div
                className="ShowBar-Item-body">
                {
                  (note.body) ?
                  htmlToText.fromString(note.body)
                  :
                  "Untitled"
                }
              </div>
            </div>
            <div
              className="ShowBar-Item-Time">
              {handleCalculateUpdateHours(note.updated_at)}
            </div>
          </div>
        );
      }
    );
    return itemBoxes.reverse();
  };

  return (
    <div
      className="ShowBar">
      <div
        className="ShowBar-Header">
        <div>
          {
            (props.currentNotebook.name) ?
              props.currentNotebook.name
            :
              "All Notes"
          }
        </div>
        <div>
          {handleItemCount()}
        </div>
      </div>
      <div
        className="ShowBar-Item-Boxes">
        {handleItems()}
      </div>
    </div>
  );
};


export default showBar;
