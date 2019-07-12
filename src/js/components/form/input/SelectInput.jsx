import React from "react";
import PropTypes from "prop-types";

export default function SelectInput({items, value, onChange, id}) {
  return (
    <select id={id} value={value} onChange={onChange} className="form-control">
      <option value="select">Select Value</option>
      {items.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

SelectInput.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
