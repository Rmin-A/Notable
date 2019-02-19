import React from 'react';

const showBar = (props) => {
  if ( !props.items.data ) {
    return(
      <div
        className="ShowBar">
      </div>
    );
  }

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
    let itemBoxes = [];
    Object.values(props.items.data).forEach( (item) => {
        itemBoxes.push(
          <div
            className="ShowBar-Item-Box"
            key={item.id}>
            <div
              className="ShowBar-Item-Title">
              {item.name}
            </div>
            <div
              className="ShowBar-Item-Title">
              {
                (item.body) ? item.body : null
              }
            </div>
            <div
              className="ShowBar-Item-Title">
              {handleCalculateUpdateHours(item.updated_at)}
            </div>
          </div>
        );
      });
    return itemBoxes.reverse();
  };

  return(
    <div
      className="ShowBar">
      { handleItems() }
    </div>
  );

};

export default showBar;
