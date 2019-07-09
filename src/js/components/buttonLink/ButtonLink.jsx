import React from "react";
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom';

export default function ButtonLink({ onClick, label,path }) {
    return (
        <NavLink className="btn btn-light" onClick={onClick} to={path}>
            {label}
        </NavLink>
    );
}
ButtonLink.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};