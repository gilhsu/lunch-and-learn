import React from 'react';

const EventPresenterTile = (props) => {


  return (
    <div>
      <div className="text2 weight7">
        Lunch&Learn<br/>Invitation From
      </div>
      <div>
        <img src={props.avatar} style={{width: '200px'}} />
      </div>
      <div className="grid-x">
        <div className="cell small-4">
          <img src={props.userPhoto} id="dashboard-photo"></img>
        </div>
        <div className="cell small-8" style={{padding: '10px 0px 0px 5px'}}>
          <div className="text2 weight5">
            {props.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPresenterTile;
