import React from "react";
import "./Visualize.css";

const Visualize = (props) => {
  return (
    <button className="visualize-btn" onClick={props.onClick}>
      Visualize
    </button>
  );
};

export default Visualize;
