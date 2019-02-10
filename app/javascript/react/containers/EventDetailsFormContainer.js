import React, { Component } from "react";
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import DayPicker from 'react-day-picker';
import TextField from '../components/TextField'
import StatePicker from '../components/StatePicker'
import FoodPicker from '../components/FoodPicker'
import NumberPicker from '../components/NumberPicker'

class EventDetailsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      time: "12:00PM",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      suite: "",
      city: "",
      state: "MA",
      zip: "",
      foodOne: "default",
      foodTwo: "default",
      vegetarian: "default",
      notes: "",
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
      event: {
        date: this.state.selectedDay,
        time: this.state.time,
        contact_first_name: this.state.firstName,
        contact_last_name: this.state.lastName,
        contact_email: this.state.contactEmail,
        contact_phone: this.state.phone,
        address: this.state.address,
        suite: this.state.suite,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        food_one: this.state.foodOne,
        food_two: this.state.foodTwo,
        vegetarian: this.state.vegetarian,
        notes: this.state.notes
      }
    }
    this.postEvent(formPayload)
    this.setState({
      selectedDay: undefined,
      time: "12:00PM",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      suite: "",
      city: "",
      state: "MA",
      zip: "",
      foodOne: "default",
      foodTwo: "default",
      vegetarian: "default",
      notes: "",
    })
  }

  handleSelect(event) {
    event.preventDefault()
    this.setState({time: event.target.value});
  }

  postEvent(formPayload){
    let id = this.props.id
    fetch(`/api/v1/events/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formPayload),
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
        return location.href=`/users/${body.user_id}`
      })
    }

  render() {
    console.log(this.state)

    return(
      <div className='grid-x grid-margin-x' style={{paddingRight: '20px'}}>
        <div className="cell small-4 text-center">
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
          <div className="text2 weight7" style={{marginTop: '30px'}}>
            2. Pick A Time
          </div>
          <div className="grid-x align-center">
            <div className="small-6" style={{marginTop: '12px'}}>
              <select value={this.state.time} onChange={this.handleSelect}>
                <option value="11:30AM">11:30AM</option>
                <option value="12:00PM">12:00PM</option>
                <option value="12:30PM">12:30PM</option>
                <option value="1:00PM">1:00PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid-x small-8 align-center">
          <div className="cell small-10">
            <div className="text2 weight7">
              3. Fill in Details
            </div>
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <legend>Point of Contact Info</legend>
                    <div className="grid-x small-12">
                      <div className="cell small-6">
                        <TextField
                          content={this.state.firstName}
                          placeholder="First Name"
                          name="firstName"
                          passOnChange={this.handleChange}
                          required="true"
                        />
                      </div>
                      <div className="cell small-6" style={{paddingLeft: '10px'}}>
                        <TextField style={{color: 'red'}}
                          content={this.state.lastName}
                          placeholder="Last Name"
                          name="lastName"
                          passOnChange={this.handleChange}
                          required="true"
                        />
                    </div>
                    <div className="grid-x small-12">
                      <div className="small-8">
                        <TextField
                          content={this.state.email}
                          placeholder="Email"
                          name="email"
                          passOnChange={this.handleChange}
                          required="true"
                        />
                      </div>
                      <div className="small-4" style={{paddingLeft: '10px'}}>
                        <TextField
                          content={this.state.phone}
                          placeholder="Phone Number"
                          name="phone"
                          passOnChange={this.handleChange}
                          required="true"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Presentation Address</legend>
                    <div className="grid-x small-12">
                      <div className="cell small-8">
                        <TextField
                          content={this.state.address}
                          placeholder="Address"
                          name="address"
                          passOnChange={this.handleChange}
                          required="true"
                        />
                      </div>
                      <div className="cell small-4" style={{paddingLeft: '10px'}}>
                        <TextField
                          content={this.state.suite}
                          placeholder="Suite"
                          name="suite"
                          passOnChange={this.handleChange}
                        />
                      </div>
                      <div className="cell small-6">
                        <TextField
                          content={this.state.city}
                          placeholder="City"
                          name="city"
                          passOnChange={this.handleChange}
                          required="true"
                        />
                      </div>
                      <div className="small-2" style={{paddingLeft: '10px'}}>
                        <StatePicker
                          state={this.state.state}
                          name="state"
                          passOnChange={this.handleChange}
                        />
                      </div>
                      <div className="small-4" style={{paddingLeft: '10px'}}>
                        <TextField
                          content={this.state.zip}
                          placeholder="Zip Code"
                          name="zip"
                          passOnChange={this.handleChange}
                          required="true"
                        />
                      </div>
                    </div>
                </fieldset>
                <fieldset>
                  <div className="grid-x">
                    <div className="cell small-8">
                      <legend>Preferred Catering</legend>
                    </div>
                    <div className="cell small-4" style={{paddingLeft: '10px'}}>
                      <legend># of Vegetarian</legend>
                    </div>
                  </div>
                    <div className="grid-x">
                      <div className="cell small-8 grid-x">
                        <div className="cell small-6">
                          <FoodPicker
                            food={this.state.foodOne}
                            defaultLabel="1st Choice"
                            name="foodOne"
                            passOnChange={this.handleChange}
                            />
                        </div>
                        <div className="cell small-6" style={{paddingLeft: '10px'}}>
                          <FoodPicker
                            food={this.state.foodTwo}
                            defaultLabel="2nd Choice"
                            name="foodTwo"
                            passOnChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="cell small-4">
                      <div className="" style={{paddingLeft: '10px'}}>
                        <NumberPicker
                          number={this.state.vegetarian}
                          defaultLabel="Select"
                          name="vegetarian"
                          passOnChange={this.handleChange}
                          />
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Notes For Your Presenter</legend>
                    <div className="cell small-8">
                      <TextField
                        content={this.state.notes}
                        placeholder="Allergies, Parking Info, Security Access, Etc."
                        name="notes"
                        passOnChange={this.handleChange}
                      />
                    </div>
                </fieldset>
                <div className="text-right">
                  <input
                    className="button radius submit"
                    type='submit'
                    value='Submit'
                    style={{width: "100%"}}
                    />
                </div>
              <br/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default EventDetailsFormContainer;
