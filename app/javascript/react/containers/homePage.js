import React from 'react'
import DayPicker from '../components/DayPicker';

export const HomePage = (props) => {
  let lineHeight = {
    lineHeight: 1.2,
  }

  return (
    <div>
      <div id="hero">
        <div className="grid-x">
          <div className="small-12 cell" id="hero-text-location">
            <div className="text1 weight3" style={lineHeight}>
              Coordinating<br/>
              Lunch and Learns<br/>
              Made Easy
            </div>
            <div className="text3 weight3" id="hero-description">
              The <span className="weight5">Lunch<span className="text2 weight5" style={{color: '#11AAB7'}}>&</span>Learn</span> webapp helps Sales Teams<br/>
              easily invite and keep track of upcoming<br/>
              catered lunch presentations asdf. 
            </div>
            <a href="www.google.com" className="button radius" style={{marginTop: '20px'}}>Sign Up</a>
            <div className="text4 weight4" style={{marginTop: '0px'}}>
              Already have an account?
            <a href="www.google.com" style={{fontWeight: 500}}> Log in.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
