import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ children, ...props }) => {
  const colorClass =
    props.color.toUpperCase() === "RED" ? "red-btn" : "yellow-btn";

  return <button className={`animated-btn ${colorClass}`}>{children}</button>;
};

Button.propTypes = {
  color: "red" || "yellow",
  onClick: Function,
};

export default Button;
