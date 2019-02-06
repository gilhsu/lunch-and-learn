import React, { Component } from "react";
import DayPicker from 'react-day-picker';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
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

  render() {
    return(
      <div className="grid-x grid-margin-x">
        <h1>Hello From the React DashboardContainer!</h1>
        <h1 className="callout warning">The is the show page for User {this.props.params.id}</h1>
        <div className="small-4 columns" align="center">
          <DayPicker
            onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
            disabledDays={{ daysOfWeek: [0, 6] }}
          />
          {this.state.selectedDay ? (
            <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
          ) : (
            <p>Please select a day.</p>
          )}
        </div>
        <div className="small-8 columns callout">
          The is supposed to go to the right of the calender
        </div>
      </div>
    )
  }
}

export default DashboardContainer;
