import React, { Component } from "react";
import { Redirect } from 'react-router'
import NameField from '../components/NameField'
import EmailField from '../components/EmailField'
import DescriptionField from '../components/DescriptionField'
import CompanyField from '../components/CompanyField'

class InitiateEventFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
      client_company: ""
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
      client_company: this.state.client_company
    }
    this.postEvent(formPayload)
    this.setState({name: "", email: "", description: "", client_company: ""})
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
      <div className='grid-x grid-margin-x align-center'>
        <div className="form cell small-6">
          <div className="text1 weight7">New Event Form</div>
          <br/>
          <form onSubmit={this.handleSubmit} action='/'>
            <NameField
              content={this.state.name}
              label="Lunch&Learn Event Name"
              name="name"
              passOnChange={this.handleChange}
            />
          <CompanyField
              content={this.state.client_company}
              label="Presentee Company Name"
              name="client_company"
              passOnChange={this.handleChange}
            />
            <EmailField
                content={this.state.email}
                label="Client Email"
                name="email"
                passOnChange={this.handleChange}
              />
            <DescriptionField
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

export default InitiateEventFormContainer;
