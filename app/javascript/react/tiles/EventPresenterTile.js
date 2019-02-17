import React from 'react';

const EventPresenterTile = (props) => {
  return (
    <div style={{marginLeft: '10px'}}>
      <div className="text2 weight7" style={{marginBottom: '25px'}}>
        Lunch<span className="text2 weight7 primary" style={{fontSize: '30px'}}>&</span>Learn Invitation From
      </div>
      <div className="grid-x align-center">
        <div className="grid-x small-12">
          <div className="cell small-3">
            <img src={props.userPicture} id="dashboard-photo"></img>
          </div>
          <div className="cell small-9" style={{marginTop: '-3px', paddingLeft: '10px'}}>
            <div className="text2 weight5" style={{marginBottom: '-5px'}}>
              {props.userFirst} {props.userLast}<br/>
            </div>
            <div className="text4 weight4">
              {props.userTitle}
            </div>
            <div>
              <img src={props.companyLogo} style={{width: '150px', marginLeft: '-5px'}}/>
            </div>
          </div>
        </div>
        <div style={{padding: '20px 30px 0px 0px'}}>
          <div>
            <div className="weight7">
              Event Title
            </div>
            {props.eventName}
          </div>
          <br/>
          <div>
            <div className="weight7">
              Description
            </div>
            {props.eventDescription}
          </div>
          <br/>
          <div>
            <div className="weight7">
              About {props.companyName}
            </div>
            {props.companyDescription}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPresenterTile;
