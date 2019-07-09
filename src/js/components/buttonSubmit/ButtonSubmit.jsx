import React from "react";
import PropTypes from 'prop-types'


export default function ButtonSubmit({ label,disabled }) {
    return (
        <button type="submit" disabled={disabled} className="btn btn-light" >
            {label}
        </button>
    );
}
ButtonSubmit.propTypes = {
    label: PropTypes.string.isRequired,
    disabled:PropTypes.bool
};
ButtonSubmit.defaultProps = {
    disabled:false,
}