import React from "react";
import PropTypes from "prop-types";

export default function TextInput({ label, fieldName,onChange }) {
    return (
        <div className="form-group ">
            <label htmlFor="nameInput">{label}</label>
            <input
                name={fieldName}
                component="input"
                type="text"
                className="form-control"
                onChange={(event)=>onChange(event.target.value)}
                id={fieldName}
            />
        </div>
    );
}
TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
};
