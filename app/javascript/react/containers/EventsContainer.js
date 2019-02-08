import React, { Component } from "react";
import EventTile from '../tiles/EventTile'

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }


  render() {

    let events = this.props.events.map(event => {
      return(
        <EventTile
          key={event.id}
          name={event.name}
          email={event.email}
          company={event.client_company}
          date={event.created_at}
          updated={event.updated_at}
        />
      )
    })
    return(
      <div className="">
        {events}
      </div>
    )
  }
}

export default EventsContainer
