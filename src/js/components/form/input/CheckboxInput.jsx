import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";

export default function CheckboxInput({ label, id, checked, onChange }) {
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="custom-control-input"
        id={id}
      />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
CheckboxInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};
CheckboxInput.defaultProps = {
  label: ""
};
