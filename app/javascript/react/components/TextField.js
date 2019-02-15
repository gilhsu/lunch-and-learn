import React from 'react';

const TextField = (props) => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        placeholder={props.placeholder}
        onChange={props.passOnChange}
        required={props.required}
      />
    </label>
  );
}

export default TextField;
