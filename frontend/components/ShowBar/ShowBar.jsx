import React, { Component } from 'react';

class ShowBar extends Component {

  componentDidMount() {
    const items = document.querySelectorAll(".ShowBar-Item-Box");
    if ( !this.props.selectedNoteId ) {
      if ( items.length > 0) {
        let firstNoteId = items[0].getAttribute('note-id');
        this.props.handleItemSelect(firstNoteId);
      }
    } else {
      let that = this;
      let selectedNote = Array.prototype.slice.call(items).find( (item) => {
        return item.getAttribute('note-id') === that.props.selectedNoteId.toString()
      })
      selectedNote.classList.toggle('ShowBar-Item-Box-Selected');
    }
  }

  handleCalculateUpdateHours = (date) => {
    // get total seconds between the times
    var delta = Math.abs(new Date() - new Date(date)) / 1000;
    if ( delta >= 86400 && delta < 172800) {
      return "A day ago";
    } else if (delta > 86400) {
      // calculate (and subtract) whole days
      var days = Math.floor(delta / 86400);
      return (days.toString() + " days ago");
    } else if ( delta >= 360 && delta < 720 ) {
      return "An hour ago";
    } else if (delta >= 720 && delta < 86400){
      // calculate (and subtract) whole hours
      var hours = Math.floor(delta / 3600) % 24;
      return (hours.toString() + " hours ago");
    } else {
      return "Less than an hour ago";
    }
  }

  handleItems = () => {
    if ( !this.props.list.notes ) {
      return(
        <div
          className="ShowBar-Item-Boxes">
        </div>
      );
    }
    let itemBoxes = [];
    Object.values(this.props.list.notes).forEach( (note, idx ) => {
      itemBoxes.push(
        <div
          className="ShowBar-Item-Box"
          key={note.id}
          note-id={note.id}
          onClick={ (e) => alert('hi')}>
          <div>
            <div
              className="ShowBar-Item-Title">
              {
                (note.name) ? note.name : "Untitled"
              }
            </div>
            <div
              className="ShowBar-Item-body">
              {
                (note.body) ? note.body : null
              }
            </div>
          </div>
          <div
            className="ShowBar-Item-Time">
            {this.handleCalculateUpdateHours(note.updated_at)}
          </div>
        </div>
      );
    });
    return itemBoxes.reverse();
  }

  handleItemCount = () => {
    let count = Object.keys(this.props.list.notes).length;
    switch (count) {
      case undefined:
      return "";
      case 1:
      return "1 note";
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
          <div>{ this.props.list.type }</div>
          <div>{ this.handleItemCount() }</div>
        </div>
        <div
          className="ShowBar-Item-Boxes">
          { this.handleItems() }
        </div>
      </div>
    )
  }
}

export default ShowBar;
