import React from "react";
import './radio.component.scss';

function Radio(props) {
  const {
    className,
    name,
    value,
    onChange
  } = props;
  return (
    <input
      className={`ui-input-radio ${className}`}
      name={name}
      value={value}
      onChange={onChange}
      type="radio"
    />
  )
}

export {
  Radio
}
