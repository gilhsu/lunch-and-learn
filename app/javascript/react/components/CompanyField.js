import React from 'react';

const CompanyField = (props) => {


  return (
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

export default CompanyField;
