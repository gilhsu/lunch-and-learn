import React from 'react';

const EventTile = (props) => {
  var recievedDate = new Date(props.date);
  var day= recievedDate.getDate();
  var month= recievedDate.getMonth();
  var year= recievedDate.getFullYear();
  var convertedDate= new Date(year, month, day)

  return (
    <div className="horizontal-line" id="event-tile">
      <div className="text3 weight5 primary">
        Event Pending
      </div>
      <div className="text1 weight4">
        {props.name}
      </div>
      <div className="text2 weight3">
        Sent to: {props.email}
      </div>
      <div className="text3 weight3">
        Invitation sent on: {convertedDate.toDateString()}
      </div>
    </div>
  );
}

export default EventTile;
