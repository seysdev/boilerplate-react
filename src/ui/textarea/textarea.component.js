import React from "react";
import TextField from '@material-ui/core/TextField';

import './textarea.component.scss';

function UITextarea(props) {
  const {
    className,
    name,
    label,
    id,
    value,
    onChange,
    rowsMax = '4'
  } = props;
  return (
    <TextField
      className={`ui-textarea ${className}`}
      name={name}
      label={label}
      multiline
      rowsMax={rowsMax}
      id={id}
      value={value}
      onChange={onChange}
    />
  )
}

export {
  UITextarea
}
