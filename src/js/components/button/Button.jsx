import React from "react";
import PropTypes from "prop-types";

export default function Button({ onClick, label, disabled }) {
  return (
    <a className="btn btn-light" onClick={disabled ? null : onClick}>
      {label}
    </a>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,

  disabled: PropTypes.bool
};
Button.defaultProps = {
  disabled: false
};
