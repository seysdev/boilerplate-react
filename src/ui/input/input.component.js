import React from "react";
import TextField from '@material-ui/core/TextField';
import './input.component.scss';

function UIInput(props) {
  const {
    className,
    name,
    type,
    placeholder,
    label,
    id,
    defaultValue,
    value,
    onChange,
  } = props;
  return (
    <TextField
      className={className}
      name={name}
      type={type}
      plaheholder={placeholder}
      label={label}
      id={id}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  )
}

export {
  UIInput
}
