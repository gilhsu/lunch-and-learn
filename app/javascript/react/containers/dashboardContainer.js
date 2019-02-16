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
      confirmedDates: [],
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
    let success = "https://media.giphy.com/media/yoJC2i270b1mQvcDdK/giphy.gif"
    this.state.confirmed.forEach(event => {
      if (event.date.toDateString() === day.toDateString()) {
        if (this.state.buttonConfirmed === false) {
          this.clickConfirmed()
        }
        this.setState({ show: [event] })
        throw success
      } else {
        this.clickConfirmed()
        this.setState({ show: this.state.confirmed })
      }
    })
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
    this.fetchUserData(id)
  }


  fetchUserData(id){
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
      let confirmedDates = []
      body.confirmed.map((event) => {
        let arrayDate = event.date.split('-')
        let joinDate = new Date(arrayDate[1] + "-" + arrayDate[2] + "-" + arrayDate[0])
        joinDate.setHours(12,0,0,0)
        confirmedDates.push(joinDate)
        event.date = joinDate
      })
      this.setState({
        confirmed: body.confirmed,
        confirmedDates: confirmedDates,
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

    const modifiers = {
    confirmed: this.state.confirmedDates,
    };
    const modifiersStyles = {
      confirmed: {
        fontWeight: '500',
        color: '#a07b00',
        backgroundColor: '#ffeeb7',
      },
    };

    return(
      <div className="grid-container">
        <br/>
        <br/>
        <div className="grid-x grid-margin-x">
          <div className="cell small-4 vertical-line">
            <div className="">
              <div className="grid-x small-12 align-center horizontal-line" style={{marginTop: '10px'}}>
                <div className="cell small-4 text-right">
                  <img src={this.state.user_photo} id="dashboard-photo"></img>
                </div>
                <div className="cell small-8" style={{padding: '0px 0px 0px 20px'}}>
                  <div className="text2 weight9">
                    {this.state.user.first_name} {this.state.user.last_name}
                  </div>
                  <div className="text4 weight5" style={{marginTop: '-5px'}}>
                    {company}
                    <a href='/company/new/' className="text4 weight5 primary">{addCompany}</a><br/>
                    <a href={'/users/' + this.state.user.id + '/edit'} className="text4 weight5 primary">Edit Profile</a>
                  </div>
                </div>
              </div>
              <div className="text-center" style={{marginTop: "20px"}}>
                <DayPicker
                  showOutsideDays
                  onDayClick={this.handleDayClick}
                  selectedDays={this.state.selectedDay}
                  disabledDays={{ daysOfWeek: [] }}
                  modifiers={modifiers}
                  modifiersStyles={modifiersStyles}
                  />
              </div>
              <div className="cell small-12 text-center">
                <a href={`/events/new`} className="button radius" style={{width: '85%', marginTop: '20px'}}>Create A New Event</a>
              </div>
            </div>
          </div>
          <div className="cell small-8">
            <div className="horizontal-line" style={{paddingBottom: '0px'}}>
              <button className={buttonConfirmedStyle} style={{marginLeft: '5px'}} onClick={this.clickConfirmed}>Confirmed</button>
              <button className={buttonPendingStyle} style={{marginLeft: '5px'}} onClick={this.clickPending}>Pending</button>
            </div>
            <div className="container-scroll">
              <EventsContainer events={this.state.show}/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default DashboardContainer;
