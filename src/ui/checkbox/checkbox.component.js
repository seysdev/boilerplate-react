import React from "react";
import './checkbox.component.scss';

function Checkbox(props) {
  const {
    className,
    name,
    value,
    onChange
  } = props;
  return (
    <input 
      className={`ui-input-checkbox ${className}`} 
      name={name}
      value={value}
      onChange={onChange}
      type="checkbox"
    />
  )
}

export {
  Checkbox
}
