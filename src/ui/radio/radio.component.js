import React from "react";
import Radio from '@material-ui/core/Radio';

import './radio.component.scss';

function UIRadio(props) {
  const {
    className,
    name,
    id,
    checked,
    onChange
  } = props;
  return (
    <Radio
      className={className}
      name={name}
      id={id}
      checked={checked}
      onChange={onChange}
    />
  )
}

export {
  UIRadio
}
