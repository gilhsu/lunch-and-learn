import React from 'react';

const EventPresenterTile = (props) => {


  return (
    <div>
      <div className="text2 weight7 text-center" style={{marginBottom: '20px'}}>
        Lunch<span className="text2 weight7 primary" style={{fontSize: '30px'}}>&</span>Learn Invitation From
      </div>
      <div className="grid-x align-center">
        <div className="grid-x small-10">
          <div className="cell small-4">
            <img src={props.userPhoto} id="dashboard-photo"></img>
          </div>
          <div className="cell small-8" style={{padding: '10px 0px 0px 5px'}}>
            <div className="text2 weight5">
              {props.name}
            </div>
            <div>
              <img src={props.company.avatar} style={{width: '200px'}} />
            </div>
          </div>
        </div>
        <div style={{padding: '0px 25px 0px 10px'}}>
          <div>
            <div className="weight7">
              Event Title
            </div>
            {props.event.name}
          </div>
          <br/>
          <div>
            <div className="weight7">
              Description
            </div>
            {props.event.description}
          </div>
          <br/>
          <div>
            <div className="weight7">
              About {props.company.name}
            </div>
            {props.company.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPresenterTile;
