import React from "react";
import PropTypes from 'prop-types'


export default function ButtonSubmit({ label,disabled,width }) {
    return (
        <button type="submit" disabled={disabled} className="btn btn-dark button" style={{width}}>
            {label}
        </button>
    );
}
ButtonSubmit.propTypes = {
    label: PropTypes.string.isRequired,
    disabled:PropTypes.bool,
    width:PropTypes.number
};
ButtonSubmit.defaultProps = {
    disabled:false,
    width:200
}