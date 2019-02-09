import React, { Component } from "react";
import DayPicker from 'react-day-picker';
import EventsContainer from './EventsContainer'

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      user: {},
      company: {},
      confirmed: [],
      pending: [],
      show: [],
      buttonConfirmed: true,
    }
    this.handleDayClick = this.handleDayClick.bind(this);
    this.clickConfirmed = this.clickConfirmed.bind(this);
    this.clickPending = this.clickPending.bind(this);
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


  clickConfirmed = () => {
    this.setState({ show: this.state.confirmed })
    this.setState({ buttonConfirmed: true})
  }

  clickPending = () => {
    this.setState({ show: this.state.pending })
    this.setState({ buttonConfirmed: false})
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
      this.setState({
        confirmed: body.confirmed,
        pending: body.pending,
        show: body.confirmed,
        user: body.user,
        user_photo: body.user.profile_photo.url,
        company: body.company
      })
    })
  }

  render() {
    let company
    let addCompany
    if (this.state.company.name != "No Company") {
      company = this.state.company.name
    } else {
      addCompany = "Add Company"
    }

    let buttonConfirmedStyle
    let buttonPendingStyle
    if (this.state.buttonConfirmed) {
      buttonConfirmedStyle = "button small radius"
      buttonPendingStyle = "button small radius not-clicked"
    } else {
      buttonConfirmedStyle = "button small radius not-clicked"
      buttonPendingStyle = "button small radius"
    }

    return(
      <div className="grid-container">
        <br/>
        <br/>
        <div className="grid-x grid-margin-x">
          <div className="cell small-4 vertical-line">
            <div className="">
              <div className="grid-x small-12 align-center horizontal-line" style={{marginTop: '10px'}}>
                <div className="cell small-4">
                  <img src={this.state.user_photo} id="dashboard-photo"></img>
                </div>
                <div className="cell small-8" style={{padding: '10px 0px 0px 5px'}}>
                  <div className="text2 weight5">
                    {this.state.user.first_name} {this.state.user.last_name}
                  </div>
                  <div className="text4 weight7 primary">
                    {company}
                    <a href='/company/new/' className="text4 weight7 primary">{addCompany}</a>
                  </div>
                </div>
              </div>
              <div className="text-center" style={{marginTop: "20px"}}>
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
              </div>
              <div className="cell small-12 text-center">
                <a href={`/events/new`} className="button radius">Create A New Event</a>
              </div>
            </div>
          </div>
          <div className="cell small-8">
            <div className="">
              <button className={buttonConfirmedStyle} style={{marginLeft: '5px'}} onClick={this.clickConfirmed}>Confirmed</button>
              <button className={buttonPendingStyle} style={{marginLeft: '5px'}} onClick={this.clickPending}>Pending</button>
            </div>
            <div class="container-scroll">
              <EventsContainer events={this.state.show}/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default DashboardContainer;
