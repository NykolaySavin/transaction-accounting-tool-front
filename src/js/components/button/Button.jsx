import React from "react";

export default function Button({ onClick, label }) {
  return (
    <a className="btn btn-secondary" onClick={onClick}>
      {label}
    </a>
  );
}
