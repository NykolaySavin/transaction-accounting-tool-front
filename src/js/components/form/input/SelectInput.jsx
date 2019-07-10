import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";

export default function SelectInput({ label, fieldName, items }) {
  return (
    <div className="form-group ">
      <label htmlFor="type">{label}</label>
      <Field
        name={fieldName}
        component="select"
        className="form-control"
        id={fieldName}
      >
        {items.map(item => (
          <option key={item}>{item}</option>
        ))}
      </Field>
    </div>
  );
}
SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};
