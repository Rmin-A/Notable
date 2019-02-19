import React from 'react';

const showBar = (props) => {

  const handleCalculateUpdateHours = (date) => {
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
  };

  const handleItems = () => {
    if ( !props.items.data ) {
      return(
        <div
          className="Showbar-Items-Boxes">
        </div>
      );
    }
    let itemBoxes = [];
    Object.values(props.items.data).forEach( (item) => {
        itemBoxes.push(
          <div
            className="ShowBar-Item-Box"
            key={item.id}>
            <div>
              <div
                className="ShowBar-Item-Title">
                {
                  (item.name) ? item.name : "Untitled"
                }
              </div>
              <div
                className="ShowBar-Item-body">
                {
                  (item.body) ? item.body : null
                }
              </div>
            </div>
            <div
              className="ShowBar-Item-Time">
              {handleCalculateUpdateHours(item.updated_at)}
            </div>
          </div>
        );
      });
    return itemBoxes.reverse();
  };

  const handleItemCount = () => {
    let count = Object.keys(props.items.data).length;
    switch (count) {
      case undefined:
        return "";
      case 1:
        return "1 note";
      default:
        return `${count} notes`;
    }
  };

  return(
    <div
      className="ShowBar">
      <div
        className="ShowBar-Header">
        <div>{ props.items.type }</div>
        <div>{ handleItemCount() }</div>
      </div>
      <div
        className="Showbar-Items-Boxes">
        { handleItems() }
      </div>
    </div>
  );

};

export default showBar;
