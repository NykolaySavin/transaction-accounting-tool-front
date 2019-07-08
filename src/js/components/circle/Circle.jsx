import React from 'react';
import PropTypes from 'prop-types';


export default function Circle({ size, color, isFilled }) {
  return (
    <div style={{ width: size * 2, height: size * 2 }}>
      <svg viewBox={`0 0 ${size * 2} ${size * 2}`}>
        {
              isFilled
                ? <circle cx={size} cy={size} r={size} stroke={color} strokeWidth="0" fill={color} />
                :<circle cx={size} cy={size} r={size - 3} stroke={color} strokeWidth="3" fill="white" />
          }

      </svg>
    </div>
  );
}

Circle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  isFilled: PropTypes.bool,
};
Circle.defaultProps = {
  isFilled: false,
};
