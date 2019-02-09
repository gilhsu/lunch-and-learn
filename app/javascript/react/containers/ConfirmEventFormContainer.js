import React, { Component } from "react";

class ConfirmEventFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return(
      <div className="grid-container">
        <br/>
        <br/>
        <div className="grid-x grid-margin-x">
          <div className="cell small-6">
            Hello from inside the nested div!
          </div>
          <div className="cell small-6">
            Hello from inside the nested div!
          </div>
        </div>
      </div>

    )
  }
}

export default ConfirmEventFormContainer
