import React, { Component } from "react";

class ConfirmEventFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      user: {},
      company: {}
    }
  }

  componentDidMount() {
    let id = this.props.params.id;
    this.fetchEventData(id)
  }

  fetchEventData(id){
  fetch(`/api/v1/events/${id}/edit`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(body => {
      debugger
      this.setState({
        event: body.event,
        user: body.user,
        company: body.company
      })
    })
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
