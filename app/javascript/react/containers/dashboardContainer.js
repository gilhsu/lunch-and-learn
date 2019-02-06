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
      <div className="grid-container">
        <h1 className="text-center">Hello From the React DashboardContainer!</h1>
        <div className="grid-x grid-margin-x">
          <div className="cell small-4 text-right">
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
          <p className="callout warning cell small-8 text-right">The is the show page for User {this.props.params.id}<br/><br/>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

    )
  }
}

export default DashboardContainer;
