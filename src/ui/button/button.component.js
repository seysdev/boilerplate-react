import React from "react";
import './button.component.scss';

function Button(props) {
  const {
    className,
    type,
    children
  } = props;

  return (
    <button
      className={`ui-button ${className}`}
      name={name}
      type={type}
    >
      {children}
    </button>
  )
}

export {
  Button
}
