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
        />
      )
    })
    return(
      <div className="">
        {events}
        test
      </div>
    )
  }
}

export default EventsContainer
