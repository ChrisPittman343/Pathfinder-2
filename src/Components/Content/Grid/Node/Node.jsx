import React from "react";
import PropTypes from "prop-types";
import "./Node.css";

function Node(props) {
  const extraClass = () => {
    return props.isStart ? "start-node" : "";
  };

  return <div className={`node`}></div>;
}

Node.propTypes = {
  weight: Number,
  isStart: Boolean,
  isEnd: Boolean,
  isVisited: Boolean,
};

export default Node;
