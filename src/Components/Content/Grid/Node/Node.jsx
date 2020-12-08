import React from "react";
import PropTypes from "prop-types";
import "./Node.css";

function Node(props) {
  const extraClass = () => {
    return props.isStart ? "start-node" : "";
  };

  return <td className={`node`}></td>;
}

Node.propTypes = {
  weight: PropTypes.number,
  isStart: PropTypes.bool,
  isEnd: PropTypes.bool,
  isVisited: PropTypes.bool,
};

export default Node;
