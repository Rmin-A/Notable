import React
  from 'react';
import htmlToText
  from 'html-to-text';

const deleteNoteModal = (props) => {

  const handleClose = () => {
    return (e) => {
      e.preventDefault();
      props.closeModal();
    };
  };

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault();
      let note = props.currentNote;
      props.deleteNote(note);
      props.closeModal();
    };
  };

  return (
    <div
      className="Delete-Note-Modal-Box">
      <div
        className="Delete-Note-Modal-Notif">
        <div>
          Are you sure you wanna delete this note?
        </div>
        <div>
          {htmlToText.fromString(props.currentNote.name)}
        </div>
      </div>

      <div
        className="Delete-Note-Buttons">
        <button
          className="Delete-Note-Buttons-Cancel"
          onClick={handleClose()}>
          Cancel
        </button>
        <button
          type="submit"
          className="Delete-Note-Buttons-Submit"
          onClick={handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default deleteNoteModal;
