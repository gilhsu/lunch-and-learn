import React, { Component } from "react";
import EventPresenterTile from '../tiles/EventPresenterTile'
import EventDetailsFormContainer from './EventDetailsFormContainer'

class ConfirmEventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      companyDescription: "",
      companyLogo: "",
      eventName: "",
      eventDescription: "",
      userFirst: "",
      userLast: "",
      userTitle: "",
      userPicture: ""
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
      this.setState({
        companyName: body.company.name,
        companyDescription: body.company.description,
        companyLogo: body.company.avatar.url,
        eventName: body.event.name,
        eventDescription: body.event.description,
        userFirst: body.user.first_name,
        userLast: body.user.last_name,
        userTitle: body.user.title,
        userPicture: body.user.profile_photo.url
      })
    })
  }


  render() {
    let userName = `${this.state.userFirst} ${this.state.userLast}`
    return(
      <div className="grid-container">
        <br/>
        <div className="grid-x grid-margin-x">
          <div className="cell small-4 vertical-line align-center" style={{padding: '0px 10px 0px 20px', marginTop: '-7px'}}>
            <EventPresenterTile
              companyName={this.state.companyName}
              companyDescription={this.state.companyDescription}
              companyLogo={this.state.companyLogo}
              eventName={this.state.eventName}
              eventDescription={this.state.eventDescription}
              userFirst={this.state.userFirst}
              userLast={this.state.userLast}
              userTitle={this.state.userTitle}
              userPicture={this.state.userPicture}
              />
          </div>
          <div className="cell small-8 overflow-hidden">
            <EventDetailsFormContainer
              id={this.props.params.id}
              event={this.state.event}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>

    )
  }
}

export default ConfirmEventContainer
