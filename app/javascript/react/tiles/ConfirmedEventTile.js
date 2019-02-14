import React from 'react';
import RestaurantTile from './RestaurantTile'

const ConfirmedEventTile = (props) => {
  var recievedDate = new Date(props.date);
  var day= recievedDate.getDate();
  var month= recievedDate.getMonth();
  var year= recievedDate.getFullYear();
  var convertedDate= new Date(year, month, day)
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
      <div className="text3 weight5">
        Event Confirmed
      </div>
      <div className="text3 weight3">
        Sent On: {convertedDate.toDateString()}
      </div>
      <div className="text1 weight4">
        {props.company}
      </div>
      <div className="text2 weight3">
        Event Name: {props.name}
      </div>
      <div className="text2 weight3">
        Sent To: {props.email}
      </div>
      <br/>
      <div className="text3 weight5">
        Catering Suggestions for Food 1
        {restaurants1}
      </div>
      <br/>
      <div className="text3 weight5">
        Catering Suggestions for Food 2
        {restaurants2}
      </div>
      <a href={"/events/" + props.id + "/edit"} className="text3 weight7">
        Edit Invitation
      </a>
    </div>
  );
}

export default ConfirmedEventTile;
