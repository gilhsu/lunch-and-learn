import React, { Component } from "react";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return(
      <div>
        <h1>Hello From the React DashboardContainer!</h1>
        <h1>The is the show page for User {this.props.params.id}</h1>
      </div>
    )
  }
}

export default DashboardContainer;
