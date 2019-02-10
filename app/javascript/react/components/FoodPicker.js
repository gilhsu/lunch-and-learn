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
      <option value="salad">Salad</option>
      <option value="pizza">Pizza</option>
      <option value="mediterranean">Mediterranean</option>
      <option value="soup">Soup</option>
    </select>
  );
}

export default FoodPicker;
