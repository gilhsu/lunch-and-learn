import React from 'react';

const NumberPicker = (props) => {


  return (
    <select
      value={props.number}
      onChange={props.passOnChange}
      name={props.name}
    >
      <option value="default" disabled={true}>{props.defaultLabel}</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5+">5+</option>
    </select>
  );
}

export default NumberPicker;
