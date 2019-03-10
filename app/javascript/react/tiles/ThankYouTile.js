import React from 'react'

const ThankYouTile = (props) => {

  let profile_photo
  let company_logo
  let event_date
  if (props.user.profile_photo) {
    profile_photo = props.user.profile_photo.url
    company_logo = props.company.avatar.url
    event_date = props.event.selectedDay.toDateString()
  }


  return(
    <div id="thank-you-tile">
      <div className="grid-x">
        <div className="cell small-1" id="check-mark"/>
        <div className="cell small-11 text2 weight7">
        Event Confirmed!
        </div>
      </div>
      <div style={{marginTop: '20px'}}>
        Your event details are shown below:
      </div>
      <br/>
      <div className="grid-x">
        <div className="cell small-12">
          <div className="text4 weight4">
            Lunch&Learn Event Title
          </div>
          <div className="text2 weight7">
            {props.event.name}
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="cell small-7">
          <div className="text4 weight4" style={{marginBottom: '10px'}}>
            Presenting Company
          </div>
          <div className="grid-x align-center">
            <div className="grid-x small-12">
              <div className="cell small-3">
                <img src={profile_photo} id="dashboard-photo"></img>
              </div>
              <div className="cell small-9" style={{marginTop: '-3px', paddingLeft: '10px'}}>
                <div className="text2 weight5" style={{marginBottom: '-5px'}}>
                  {props.user.first_name} {props.user.last_name}<br/>
                </div>
                <div className="text4 weight4">
                  {props.user.title}
                </div>
                <div>
                  <img src={company_logo} style={{width: '150px', marginLeft: '-5px'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell small-5">
          <div className="text4 weight4">
            Presentation Date
          </div>
          <div className="text2 weight7 primary">
            {event_date}
          </div>
        </div>
        <div className="grid-x cell small-12" style={{marginTop: '30px'}}>
          <div className="cell small-7">
            <div className="text4 weight4">
              Presentation Location
            </div>
            <div className="text3 weight7">
              {props.event.address},  Suite {props.event.suite} <br/>
            {props.event.city}, {props.event.state} {props.event.zip}
          </div>
        </div>
        <div className="cell small-5">
          <div className="text4 weight4">
            Food Selections
          </div>
          <div className="text3 weight7">
            1. <span className="text3 weight7 primary">{props.event.foodOne}</span>
            <br/>
            2. <span className="text3 weight7 primary">{props.event.foodTwo}</span>
          </div>
        </div>
        </div>
        <br/>
        <br/>
        <div className="cell small-12" style={{marginTop: '40px'}}>
          An email confirmation has been sent to <span className="weight7 primary">{props.event.contactEmail}</span>
        </div>
      </div>
    </div>
  )
}

export default ThankYouTile;
