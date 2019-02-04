import React from 'react'
import DayPicker from './DayPicker';

export const App = (props) => {

  return (
    <div>
      <div id="hero">
        <div id="hero-text-location">
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

            <a src="www.google.com" className="button large radius">Sign Up</a>

        </div>
      </div>
    </div>
  )
}

export default App
