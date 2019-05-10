import React from "react";
import Button from '@material-ui/core/Button';
import './button.component.scss';

function UIButton(props) {
  const {
    className,
    name,
    type,
    id,
    children,
    color,
    variant = "contained"
  } = props;

  return (
    <Button
      className={`ui-button ${className}`}
      name={name}
      type={type}
      id={id}
      color={color}
      variant={variant}
    >
      {children}
    </Button>
  )
}

export {
  UIButton
}
