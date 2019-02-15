import React from 'react';
import RestaurantTile from './RestaurantTile'

const ConfirmedEventTile = (props) => {

  // <div className="cell small-6" style={{textAlign: 'right'}}>
  //   <a
  //     href={"/events/" + props.id}
  //     className="button radius button-outline"
  //     style={{marginRight: '5px'}}>
  //     See Event Details
  //   </a>
  // </div>

  var presentationDate = new Date(props.date).toDateString();

  let restaurants1 = props.restaurants1.map(restaurant => {
    return(
      <RestaurantTile
        key={restaurant.id}
        name={restaurant.name}
        imageUrl={restaurant.image_url}
        price={restaurant.price}
        rating={restaurant.rating}
        reviewCount={restaurant.review_count}
        address={restaurant.address1}
        city={restaurant.city}
        state={restaurant.state}
        country={restaurant.country}
        zip={restaurant.zip_code}
        distance={restaurant.distance}
        phone={restaurant.display_phone}
      />
    )
  })
  let restaurants2 = props.restaurants2.map(restaurant => {
    return(
      <RestaurantTile
        key={restaurant.id}
        name={restaurant.name}
        imageUrl={restaurant.image_url}
        price={restaurant.price}
        rating={restaurant.rating}
        reviewCount={restaurant.review_count}
        address={restaurant.address1}
        city={restaurant.city}
        state={restaurant.state}
        country={restaurant.country}
        zip={restaurant.zip_code}
        distance={restaurant.distance}
        phone={restaurant.display_phone}
      />
    )
  })
  return (
    <div className="horizontal-line" id="event-tile">
      <div className="grid-x" style={{marginBottom: '-20px'}}>
        <div className="cell small-1" id="check-mark"/>
        <div className="cell small-5 text2 weight7" style={{margin: '2px 0px 0px -25px'}}>
          Event Confirmed <br/>
        </div>
      </div>
      <br/>
      <div className="text3 weight5 primary" style={{marginBottom: '-5px'}}>
        Client & Event Name
      </div>
      <div className="text1 weight7">
        {props.company}
      </div>
      <div className="text2 weight3">
        {props.name}
      </div>
      <br/>
      <div className="grid-x">
        <div className="cell small-6">
          <div className="text4 weight5 primary">
            Presentation Date
          </div>
          <div className="text2 weight5">
            {presentationDate}
          </div>
        </div>
        <div className="cell small-6">
          <div className="text4 weight5 primary">
            Catering Preferences
          </div>
          <div className="text3 weight3">
            First Choice: <span className="weight5">{props.foodOne}</span>
            <br/>
            Second Choice: <span className="weight5">{props.foodTwo}</span>
          </div>
        </div>
      </div>
      <br/>
      <div className="grid-x">
        <div className="cell small-6">
          <div className="text4 weight5 primary">
            Presentation Address
          </div>
          <div className="text3 weight3">
            {props.address}, Suite {props.suite}
            <br/>
            {props.city}, {props.state} {props.zip}
          </div>
        </div>
        <div className="cell small-6">
          <div className="text4 weight5 primary">
            Point of Contact Info
          </div>
          <div className="text3 weight3">
            {props.firstName} {props.lastName}
            <br/>
            {props.contactEmail}
            <br/>
            {props.phone}
            <br/>
          </div>
        </div>
      </div>
      <br/>
      <div className="grid-x">
        <div className="cell small-6">
          <div className="text4 weight5 primary" style={{marginBottom: '8px'}}>
            Catering Preference 1: <span className="weight5">{props.foodOne}</span>
          </div>
          {restaurants1}
        </div>
        <div className="cell small-6">
          <div className="text4 weight5 primary" style={{marginBottom: '8px'}}>
            Catering Preference 2: <span className="weight5">{props.foodTwo}</span>
          </div>
          {restaurants2}
        </div>
      </div>
      <br/>
      <a href={"/events/" + props.id + "/edit"} className="text4 weight7">
        Edit Invitation
      </a>
    </div>
  );
}

export default ConfirmedEventTile;
