import React, { Component } from "react";
import EventPresenterTile from '../tiles/EventPresenterTile'
import EventDetailsFormContainer from './EventDetailsFormContainer'

class ConfirmEventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      user: {},
      user_photo: "",
      company: {},
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
        event: body.event,
        user: body.user,
        user_photo: body.user.profile_photo.url,
        company: body.company
      })
    })
  }

  // pass this handleSubmit method down to EventDetailsFormContainer as a prop. Include postEvent method.
  handleSubmit(event) {

  }

  postEvent(event){
    fetch(`/api/v1/events/!!!update!!!`, {
      method: 'POST',
      body: JSON.stringify(event),
      credentials: 'same-origin',
      headers:{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
        }
      })
      .then(response => {
        if(response.ok){
          return response
        } else {
          let errorMessage= `${response.status} (${response.statusText})`, error = new Error(errorMessage)
          throw(error)
        }
      })
      .then(response => response.json())
      .then(body => {
        debugger
        return location.href=`/users/${body.user_id}`
      })
    }


  render() {
    let userName = `${this.state.user.first_name} ${this.state.user.last_name}`
    return(
      <div className="">
        <br/>
        <br/>
        <div className="grid-x grid-margin-x">
          <div className="cell small-4 text-center vertical-line">
            <EventPresenterTile
              avatar={this.state.company.avatar}
              name={userName}
              userPhoto={this.state.user_photo}
              />
          </div>
          <div className="cell small-8 container-scroll">
            <EventDetailsFormContainer
              handleSubmit = {this.handleSubmit}
            />
          </div>
        </div>
      </div>

    )
  }
}

export default ConfirmEventContainer
