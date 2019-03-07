import React from 'react'

const ThankYouTile = (props) => {

  return(
    <div id="thank-you-tile">
      <div className="grid-x">
        <div className="cell small-1" id="check-mark"/>
        <div className="cell small-11 text2 weight7">
        Event Confirmed!
        </div>
      </div>
      <br/>
      <div className="grid-x">
        <div className="cell small-6 text3 weight5">
          Presenter
          
        </div>
        Here are your event details:<br/>

        An email confirmation has been sent to <span className="weight7 primary">{props.event.contactEmail}</span>
      </div>
    </div>
  )
}

export default ThankYouTile;
