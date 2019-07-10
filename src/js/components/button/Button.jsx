import React from "react";
import PropTypes from "prop-types";

export default function Button({ onClick, label, disabled,width }) {
  return (
    <a className="btn btn-dark button" onClick={disabled ? null : onClick} style={{color:'white',width}}>
      {label}
    </a>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
    width:PropTypes.number
};
Button.defaultProps = {
  disabled: false,
    width:200
};
