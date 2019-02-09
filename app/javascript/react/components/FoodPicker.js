import React from 'react';

const FoodPicker = (props) => {


  return (
    <select
      value={props.food}
      onChange={props.passOnChange}
      name={props.name}
    >
      <option value="default" disabled={true}>{props.defaultLabel}</option>
      <option value="sandwiches">Sandwiches</option>
      <option value="sushi">Sushi</option>
      <option value="AZ">AZ</option>
      <option value="AR">AR</option>
      <option value="CA">CA</option>
      <option value="CO">CO</option>
      <option value="CT">CT</option>
      <option value="DC">DC</option>
      <option value="DE">DE</option>
    </select>
  );
}

export default FoodPicker;
