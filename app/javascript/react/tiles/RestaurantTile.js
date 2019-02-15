import React from 'react';

const RestaurantTile = (props) => {


  return (
    <div className="grid-x" style={{marginBottom: '15px'}}>
      <div className="cell small-2">
        <img src={props.imageUrl} className="restaurant-tile"/>
      </div>
      <div className="cell small-10" style={{paddingLeft: '15px', marginTop: '-2px'}}>
        <div className="weight7">
          {props.name} <br/>
        </div>
        <div className="font4">
          {props.rating} Stars  |  {props.price}
          <br/>
          {props.phone}
        </div>
      </div>
    </div>
  );
}

export default RestaurantTile;
