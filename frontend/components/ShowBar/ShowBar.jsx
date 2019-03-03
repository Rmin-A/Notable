import React, { Component }
  from 'react';
import htmlToText
  from 'html-to-text';

class ShowBar extends Component {

  componentDidMount() {
    this.handleAutoSelect();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentNotebookId !== prevProps.currentNotebookId) {
      this.handleAutoSelect();
    }
  }

  handleAutoSelect() {
    const items = document.querySelectorAll(".ShowBar-Item-Box");
    if ( !this.props.selectedNote.id ) {
      if ( items.length > 0 ) {
        let noteId = items[0].getAttribute('note-id');
        this.props.setCurrentNote(this.props.notes[noteId]);
      }
    } else {
      let that = this;
      let selectedNote =
        Array.prototype.slice.call(items).find(
          (item) => {
            return (
              item.getAttribute('note-id') ===
              that.props.selectedNote.id.toString()
            )
          }
        )
      if (selectedNote) {
        selectedNote.classList.toggle('ShowBar-Item-Box-Selected');
      }
    }
  }

  handleSelect (id) {
    let that = this;
    return (e) => {
      that.props.updateNote(that.props.selectedNote);
      that.props.setCurrentNote(that.props.notes[id]);
    }
  }

  handleCalculateUpdateHours = (date) => {
    var delta = Math.abs(new Date() - new Date(date)) / 1000;
    if (
      delta >= 86400
      && delta < 172800
    ) {
      return "A day ago";
    };
    if (
      delta >= 172800
    ) {
      var days = Math.floor(delta / 86400);
      return (days.toString() + " days ago");
    };
    if (
      delta >= 3600
      && delta < 7200
    ) {
      return "An hour ago";
    };
    if (
      delta >= 7200
      && delta < 86400
    ) {
      var hours = Math.floor(delta / 3600) % 24;
      return (hours.toString() + " hours ago");
    };
    return "Less than an hour ago";
  }

  handleItems = () => {
    if ( !this.props.notes ) {
      return(
        <div
          className="ShowBar-Item-Boxes">
        </div>
      );
    }

    let itemBoxes = [];
    Object.values(this.props.notes).forEach(
      (note, idx ) => {
        itemBoxes.push(
          <div
            className="ShowBar-Item-Box"
            key={note.id}
            note-id={note.id}
            onClick={this.handleSelect(note.id)}>
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
              {this.handleCalculateUpdateHours(note.updated_at)}
            </div>
          </div>
        );
      }
    );
    return itemBoxes.reverse();
  }

  handleItemCount = () => {
    let count = Object.keys(this.props.notes).length;
    switch (count) {
      case undefined:
        return "";
        break;
      case 1:
        return "1 note";
        break;
      default:
        return `${count} notes`;
    }
  }

  render() {
    return (
      <div
        className="ShowBar">
        <div
          className="ShowBar-Header">
          <div>
            {
              (this.props.currentNotebook) ?
                this.props.currentNotebook.name
              :
                "All Notes"
            }
          </div>
          <div>
            {this.handleItemCount()}
          </div>
        </div>
        <div
          className="ShowBar-Item-Boxes">
          {this.handleItems()}
        </div>
      </div>
    )
  }
}

export default ShowBar;
