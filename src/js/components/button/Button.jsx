import React from "react";
import PropTypes from 'prop-types'
import Circle from "../circle/Circle";

export default function Button({ onClick, label }) {
  return (
    <a className="btn btn-light" onClick={onClick}>
      {label}
    </a>
  );
}
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};