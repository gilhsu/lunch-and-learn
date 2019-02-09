import React, { Component } from "react";
import { Redirect } from 'react-router'
import DayPicker from 'react-day-picker';
import TextField from '../components/TextField'
import CompanyField from '../components/CompanyField'

class EventDetailsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      name: "",
      email: "",
      description: "",
      client_company: "",
      time: "12:00PM"
    }
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
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

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formPayload = {
      name: this.state.name,
      email: this.state.email,
      description: this.state.description,
      client_company: this.state.client_company
    }
    this.postEvent(formPayload)
    this.setState({name: "", email: "", description: "", client_company: ""})
  }

  handleSelect(event) {
    event.preventDefault()
    this.setState({time: event.target.value});
  }



  postEvent(event){
    fetch(`/api/v1/events/`, {
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
    console.log(this.state)

    return(
      <div className='grid-x grid-margin-x' style={{paddingRight: '20px'}}>
        <div className="cell small-5 text-center">
          <div className="text2 weight7">
            1. Choose A Date
          </div>
          <div className="">
            <DayPicker
              onDayClick={this.handleDayClick}
              selectedDays={this.state.selectedDay}
              disabledDays={{ daysOfWeek: [0] }}
              />
            {this.state.selectedDay ? (
              <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
            ) : (
              <p>Please select a day here.</p>
            )}
          </div>
          <div className="text2 weight7" style={{marginTop: '40px'}}>
            2. Pick A Time
          </div>
          <div className="grid-x align-center">
            <div className="small-6" style={{marginTop: '10px'}}>
              <select value={this.state.time} onChange={this.handleSelect}>
                <option value="11:30AM">11:30AM</option>
                <option value="12:00PM">12:00PM</option>
                <option value="12:30PM">12:30PM</option>
                <option value="1:00PM">1:00PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="cell small-7">
          <div className="text2 weight7">
            3. Fill in Details
          </div>
            <form onSubmit={this.handleSubmit} action='/'>
              <div className="grid-x">
                <div className="small-6">
                  <TextField
                    content={this.state.name}
                    label="Lunch&Learn Event Name"
                    name="name"
                    passOnChange={this.handleChange}
                    />
                  </div>
                <div className="small-6" style={{paddingLeft: '10px'}}>
                  <TextField
                    content={this.state.client_company}
                    label="Hello! Name"
                    name="client_company"
                    passOnChange={this.handleChange}
                    />
                </div>
              </div>
              <TextField
                content={this.state.email}
                label="Client Email"
                name="email"
                passOnChange={this.handleChange}
                />
              <TextField
                content={this.state.description}
                label="Event Description"
                name="description"
                passOnChange={this.handleChange}
                />
              <br/>
              <input className="button radius submit" type='submit' value='Submit'></input><br/>
            </form>
          </div>
        </div>

    )
  }
}

export default EventDetailsFormContainer;
