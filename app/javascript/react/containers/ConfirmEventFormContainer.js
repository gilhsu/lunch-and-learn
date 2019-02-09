import React, { Component } from "react";
import DayPicker from 'react-day-picker';

class ConfirmEventFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      event: {},
      user: {},
      user_photo: "",
      company: {},
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
      <div className="grid-container">
        <br/>
        <br/>
        <div className="grid-x grid-margin-x">
          <div className="cell small-4 text-center vertical-line">
            <div className="text2 weight7">
              Lunch&Learn<br/>Invitation From
            </div>
            <div>
              <img src={this.state.company.avatar} style={{width: '200px'}} />
            </div>
            <div className="grid-x">
              <div className="cell small-4">
                <img src={this.state.user_photo} id="dashboard-photo"></img>
              </div>
              <div className="cell small-8" style={{padding: '10px 0px 0px 5px'}}>
                <div className="text2 weight5">
                  {this.state.user.first_name} {this.state.user.last_name}
                </div>
              </div>
            </div>
          </div>
          <div className="cell small-3 text-center">
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
          <div className="cell small-3">
            Test from the right column.
          </div>
        </div>
      </div>

    )
  }
}

export default ConfirmEventFormContainer
