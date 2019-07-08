import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Circle from "../../circle/Circle";

export default function MenuItem({
  color,
  name,
  size,
  onClick,
  currentPath,
  path
}) {
  return (
    <div className="menu-item">
      <Link onClick={() => onClick(path)} style={{ width: size }} to={path}>
        <Circle size={size / 3} color={color} isFilled={path == currentPath} />
        {name}
      </Link>
    </div>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
