import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";

export default function TextInput({ label, fieldName }) {
  return (
    <div className="form-group ">
      <label htmlFor="nameInput">{label}</label>
      <Field
        name={fieldName}
        component="input"
        type="text"
        className="form-control"
        id={fieldName}
      />
    </div>
  );
}
TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired
};
