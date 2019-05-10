import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

import './checkbox.component.scss';

function UICheckbox(props) {
  const {
    className,
    name,
    id,
    value,
    checked,
    onChange
  } = props;
  return (
    <Checkbox
      className={`ui-input-checkbox ${className}`}
      name={name}
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  )
}

export {
  UICheckbox
}
