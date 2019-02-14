import React from 'react';

const RestaurantTile = (props) => {


  return (
    <div>
      {props.name} - {props.phone}
    </div>
  );
}

export default RestaurantTile;
