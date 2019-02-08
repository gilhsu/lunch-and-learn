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
      show: []
    }
    this.handleDayClick = this.handleDayClick.bind(this);
    this.clickAll = this.clickAll.bind(this);
    this.clickConfirmed = this.clickConfirmed.bind(this);
    this.clickPending = this.clickAll.bind(this);
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

  clickAll = () => {
    this.setState({ show: this.state.events })
  }

  clickConfirmed = () => {
    this.setState({ show: this.state.confirmed })
  }

  clickPending = () => {
    this.setState({ show: this.state.pending })
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
      this.setState({ events: body.events, confirmed: body.confirmed, pending: body.pending, show: body.events })
    })
}

  render() {
    console.log(this.state)

    return(
      <div className="grid-container">
        <br/>
        <br/>
        <br/>
        <div className="grid-x grid-margin-x">
          <div className="cell small-4 vertical-line">
            <div className="text-center">
              <div>
                Hello!
              </div>
              <div className="small-12 text2 weight7 primary" style={{marginBottom: '10px'}}>
                Select Day
              </div>
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
          </div>
          <div className="cell small-8">
            <div className="">
              <button className="button small radius"  onClick={this.clickAll}>All</button>
              <button className="button small radius" style={{marginLeft: '5px'}} onClick={this.clickConfirmed}>Confirmed</button>
              <button className="button small radius" style={{marginLeft: '5px'}} onClick={this.clickPending}>Pending</button>
            </div>
            <div id="event-container-scroll">
              <EventsContainer events={this.state.show}/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default DashboardContainer;
