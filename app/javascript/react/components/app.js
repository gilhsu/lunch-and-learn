import React from 'react'
import DayPicker from './DayPicker';

export const App = (props) => {

  return (
    <div>
      <div id="hero">
        <div className="row">
          <div className="small-6" id="hero-text-location">
            <div className="text1 weight3">
              Coordinating<br/>
              Lunch and Learns<br/>
              Made Easy
            </div>
            <div className="text3 weight3" id="hero-description">
              Lunch&Learn Scheduler helps Sales Teams <br/>
              easily invite and keep track of their <br/>
              upcoming client lunch presentations.
            </div>
            <a src="www.google.com" className="button large radius" style={{marginTop: '30px'}}>Sign Up</a>
            <div className="text4 weight4" style={{marginTop: '20px'}} align="left">
              Already Have an account?
            <a hef="www.google.com" style={{fontWeight: 700}}> Sign in.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
