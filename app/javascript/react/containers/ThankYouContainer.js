import React, { Component } from 'react'
import ThankYouTile from '../tiles/ThankYouTile'

class ThankYouContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        selectedDay: undefined,
        name: "",
        description: "",
        time: "12:00PM",
        firstName: "",
        lastName: "",
        contactEmail: "",
        phone: "",
        address: "",
        suite: "",
        city: "",
        state: "MA",
        zip: "",
        foodOne: "",
        foodTwo: "",
        vegetarian: "",
        notes: "",
        attendees: 0,
      },
      user: {},
      company: {}
    }
    this.fetchEventData = this.fetchEventData.bind(this)
  }

  componentDidMount() {
    let id = this.props.params.id
    this.fetchEventData(id)
  }

  fetchEventData(id){
  fetch(`/api/v1/events/${id}`)
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
      let currentDate
      if (body.event.date){
        currentDate = body.event.date
      }
      let arrayDate
      let joinDate
      if (body.event.date){
        arrayDate = body.event.date.split('-')
        joinDate = arrayDate[1] + "-" + arrayDate[2] + "-" + arrayDate[0]
      }

      let event
      if (body.event.date) {
        event = {
          selectedDay: new Date(joinDate),
          name: body.event.name,
          description: body.event.description,
          time: body.event.time,
          firstName: body.event.contact_first_name,
          lastName: body.event.contact_last_name,
          contactEmail: body.event.contact_email,
          phone: body.event.contact_phone,
          address: body.event.address,
          suite: body.event.suite,
          city: body.event.city,
          state: body.event.state,
          zip: body.event.zip,
          foodOne: body.event.food_one,
          foodTwo: body.event.food_two,
          vegetarian: body.event.vegetarian,
          notes: body.event.notes,
          attendees: body.event.attendees,
          // confirmedDates: confirmedDates
        }
      } else {
        bodyObject = {
          selectedDay: new Date(),
          confirmedDates: confirmedDates
        }
      }
      this.setState({ event: event,
        user: body.user,
        company: body.company })
    })
  }

  render() {
    console.log(this.state)
    return(
      <div className="grid-x" style={{height: '100%'}}>
        <div className="cell small-6" id="thank-you-background">
        </div>
        <div className="cell small-6">
          <ThankYouTile
            event={this.state.event}
            user={this.state.user}
            company={this.state.company}
            />
        </div>
      </div>
    )
  }
}

export default ThankYouContainer
