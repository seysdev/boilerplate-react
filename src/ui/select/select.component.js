import React from "react";
import './select.component.scss';

function Select(props) {
  const {
    className,
    name,
    value,
    onChange,
    options,
    placeholder
  } = props;
  return (
    <select 
      className={`ui-select ${className}`} 
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map(option => {
        return (
          <option
            key={option}
            value={option}
            label={option}>{option}
          </option>
        );
      })}
    </select>
  )
}

export {
  Select
}
