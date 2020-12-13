import React from "react";
import PropTypes from "prop-types";
import "./Visualize.css";

const Visualize = (props) => {
  return (
    <button className="visualize-btn" onClick={props.onClick}>
      {`Visualize ${props.currentAlgorithm}`}
    </button>
  );
};

Visualize.propTypes = {
  currentAlgorithm: PropTypes.string,
};

export default Visualize;
