import React from 'react';

const EmailField = (props) => {


  return (
    test
    <label>{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.passOnChange}
      />
    </label>
  );
}

export default EmailField;
