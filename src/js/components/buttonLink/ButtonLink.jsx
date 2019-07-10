import React from "react";
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom';

export default function ButtonLink({ onClick, label,path,width }) {
    return (
        <NavLink className="btn btn-dark link-decoration button" onClick={onClick} to={path} style={{width}}>
            {label}
        </NavLink>
    );
}
ButtonLink.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    width:PropTypes.number
};
ButtonLink.defaultProps = {
    disabled:false,
    width:200
}