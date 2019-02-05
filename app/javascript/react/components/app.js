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
              The <span className="weight5">Lunch<span className="text2 weight5" style={{color: '#11AAB7'}}>&</span>Learn</span> scheduler webapp helps<br/>
              Sales Teams easily invite and keep track<br/>
              of their upcoming catered lunch presentations.
            </div>
            <a href="www.google.com" className="button large radius" style={{marginTop: '30px'}}>Sign Up</a>
            <div className="text4 weight4" style={{marginTop: '15px'}}>
              Already have an account?
            <a href="www.google.com" style={{fontWeight: 500}}> Log in.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
