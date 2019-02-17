import React from 'react';

const EventPresenterTile = (props) => {

  let companyLogo
  if (props.company.avatar) {
    companyLogo = props.company.avatar.url
  }

  return (
    <div>
      <div className="text2 weight7 text-center" style={{marginBottom: '25px'}}>
        Lunch<span className="text2 weight7 primary" style={{fontSize: '30px'}}>&</span>Learn Invitation From
      </div>
      <div className="grid-x align-center">
        <div className="grid-x small-10">
          <div className="cell small-4">
            <img src={props.userPhoto} id="dashboard-photo"></img>
          </div>
          <div className="cell small-8" style={{marginTop: '-5px', paddingLeft: ''}}>
            <div className="text2 weight5" style={{marginBottom: '-5px'}}>
              {props.name} <br/>
            </div>
            <div className="text4 weight4" style={{marginBottom: '5px'}}>
              Director of Northeast Sales
            </div>
            <div>
              <img src={companyLogo} style={{width: '150px', marginLeft: '-5px'}}/>
            </div>
          </div>
        </div>
        <div style={{padding: '20px 30px 0px 28px'}}>
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
