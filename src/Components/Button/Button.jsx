import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ children, ...props }) => {
  const colorClass = props.color
    ? `${props.color.toLowerCase()}-btn`
    : "red-btn";

  return (
    <button className={`animated-btn ${colorClass}`} onClick={props.onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
