import React, { Component } from "react";
import { Redirect } from 'react-router'
import TextField from '../components/TextField'

class InitiateEventFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
      clientCompany: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
      client_company: this.state.clientCompany
    }
    this.postEvent(formPayload)
    this.setState({name: "", email: "", description: "", clientCompany: ""})
  }



  postEvent(formPayload){
    debugger
    fetch(`/api/v1/events/`, {
      method: 'POST',
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
    return(
      <div className='grid-x grid-margin-x align-center'>
        <div className="form cell small-6">
          <div className="text1 weight7">New Event Form</div>
          <br/>
          <form onSubmit={this.handleSubmit} action='/'>
            <TextField
              content={this.state.name}
              label="Lunch&Learn Event Name"
              name="name"
              passOnChange={this.handleChange}
              required="true"
            />
            <TextField
              content={this.state.clientCompany}
              label="Presentee Company Name"
              name="clientCompany"
              passOnChange={this.handleChange}
              required="true"
            />
            <TextField
                content={this.state.email}
                label="Client Email"
                name="email"
                passOnChange={this.handleChange}
                required="true"
              />
            <TextField
                content={this.state.description}
                label="Event Description"
                name="description"
                passOnChange={this.handleChange}
                required="true"
              />
            <br/>
            <input className="button radius submit" type='submit' value='Submit'></input><br/>
          </form>
        </div>
      </div>
    )
  }
}

export default InitiateEventFormContainer;
