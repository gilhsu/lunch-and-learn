import React, { Component } from "react";

class ConfirmedEventTile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    debugger
    let id = this.props.id
    this.fetchEventData(id)
  }


  fetchEventData(id){
    debugger
  fetch(`/api/v1/events/${id}`)
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
      debugger
      this.setState({
        confirmed: body.confirmed,
        pending: body.pending,
        show: body.confirmed,
        user: body.user,
        user_photo: body.user.profile_photo.url,
        company: body.company
      })
    })
    .catch(error => {
      console.error(`Error in fetch: ${error.message}`),
      alert("there was a problem with the submission")
    });
  }


  render() {
    let recievedDate = new Date(this.props.date);
    let day= recievedDate.getDate();
    let month= recievedDate.getMonth();
    let year= recievedDate.getFullYear();
    let convertedDate= new Date(year, month, day)


    return (
      <div className="horizontal-line" id="event-tile">
        <div className="text3 weight5">
          Event Confirmed
        </div>
        <div className="text3 weight3">
          Sent On: {convertedDate.toDateString()}
        </div>
        <div className="text1 weight4">
          {this.props.company}
        </div>
        <div className="text2 weight3">
          Event Name: {this.props.name}
        </div>
        <div className="text2 weight3">
          Sent To: {this.props.email}
        </div>
        <a href={"/events/" + this.props.id + "/edit"} className="text3 weight7">
          Edit Invitation
        </a>
      </div>
    );
  }
}

export default ConfirmedEventTile;
