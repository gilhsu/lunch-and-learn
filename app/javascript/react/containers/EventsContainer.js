import React, { Component } from "react";
import PendingEventTile from '../tiles/PendingEventTile'
import ConfirmedEventTile from '../tiles/ConfirmedEventTile'

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }


  render() {
    let events
    if (this.props.events.length > 0) {
      if (this.props.events[0].confirmed === true) {
        events = this.props.events.map(event => {
          return(
            <ConfirmedEventTile
              key={event.id}
              id={event.id}
              name={event.name}
              email={event.email}
              contactEmail={event.contact_email}
              company={event.client_company}
              firstName={event.contact_first_name}
              lastName={event.contact_last_name}
              phone={event.contact_phone}
              address={event.address}
              suite={event.suite}
              city={event.city}
              state={event.state}
              zip={event.zip}
              date={event.date}
              updated={event.updated_at}
              foodOne={event.food_one}
              foodTwo={event.food_two}
              />
          )
        })
      } else {
        events = this.props.events.map(event => {
          return(
            <PendingEventTile
              key={event.id}
              id={event.id}
              name={event.name}
              email={event.email}
              company={event.client_company}
              date={event.created_at}
              updated={event.updated_at}
              />
          )
        })
      }
    }


    return(
      <div className="">
        {events}
      </div>
    )
  }
}

export default EventsContainer
