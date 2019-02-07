import React, { Component } from "react";
import DayPicker from 'react-day-picker';
import EventsContainer from './EventsContainer'

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      events: [],
      confirmed: [],
      pending: [],
      show: ""
    }
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day, { selected, disabled }) {
    if (disabled) {
      // Day is disabled, do nothing
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }

  componentDidMount() {
    let id = this.props.params.id;
    this.fetchEventData(id)
  }

  fetchEventData(id){
  fetch(`/api/v1/users/${id}`)
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
      this.setState({ events: body.events, confirmed: body.confirmed, pending: body.pending })
    })
}

  render() {
    console.log(this.state)

    let data = this.state.events

    let clickAll = () => {
      data = this.state.events
    }

    let clickConfirmed = () => {
      data = this.state.confirmed
    }

    let clickPending = () => {
      data = this.state.pending
    }

    return(
      <div className="grid-container">
        <h1 className="text-center">Hello From the React DashboardContainer!</h1>

        <div className="grid-x grid-margin-x">
          <div className="cell small-4 text-center vertical-line">
            <DayPicker
              onDayClick={this.handleDayClick}
              selectedDays={this.state.selectedDay}
              disabledDays={{ daysOfWeek: [0, 6] }}
              />
            {this.state.selectedDay ? (
              <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
            ) : (
              <p>Please select a day here.</p>
            )}
            <div className="cell small-12 text-center">
              <a href={`/events/new`} className="button radius">Create A New Event</a>
            </div>
          </div>
          <div className="cell small-7">
            <div className="">
              <button className="button small radius" style={{marginRight: '5px'}} onClick={clickAll}>All</button>
              <button className="button small radius" style={{marginRight: '5px'}} onClick={clickConfirmed}>Confirmed</button>
              <button className="button small radius" onClick={clickPending}>Pending</button>
            </div>
            <EventsContainer events={data}/>
          </div>
        </div>
      </div>

    )
  }
}

export default DashboardContainer;
