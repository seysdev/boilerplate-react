import React from "react";
import './textarea.component.scss';

function Textarea(props) {
  const {
    className,
    name,
    value,
    onChange
  } = props;
  return (
    <textarea
      className={`ui-textarea ${className}`}
      name={name}
      value={value}
      onChange={onChange}
    >
      {
        value
      }
    </textarea>
  )
}

export {
  Textarea
}
