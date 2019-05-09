import React from "react";
import './input.component.scss';

function Input(props) {
  const {
    className,
    name,
    type,
    placeholder,
    value,
    onChange,
  } = props;
  return (
    <input
      className={`ui-input ${className}`}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export {
  Input
}
