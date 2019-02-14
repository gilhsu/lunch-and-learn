import React, { Component } from "react";

class EventDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  componentDidMount() {
    // let id = this.props.params.id;
    // this.fetchEventData(id)
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
      this.setState({
        event: body.event,
        user: body.user,
        user_photo: body.user.profile_photo.url,
        company: body.company
      })
    })
  }


  render() {

    return(
      <div className="grid-x">
        Hello from EventDetailsContainer
      </div>

    )
  }
}

export default EventDetailsContainer
