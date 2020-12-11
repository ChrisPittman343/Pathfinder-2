import React from "react";
import PropTypes from "prop-types";
import "./Node.css";

function Node(props) {
  const { row, col, weight, isStart, isEnd, isVisited } = props;
  const extraClass = () => {
    return isStart
      ? "node-start"
      : isEnd
      ? "node-end"
      : weight === Infinity
      ? "node-wall"
      : weight !== 0
      ? `node-w${weight}`
      : "";
  };

  return (
    <td
      id={`node-${row}-${col}`}
      onMouseDown={() => props.onMouseDown(row, col)}
      onMouseEnter={() => props.onMouseEnter(row, col)}
      className={`node ${extraClass()} ${isVisited ? "node-visited" : ""}`}
    ></td>
  );
}

Node.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
  weight: PropTypes.number,
  isStart: PropTypes.bool,
  isEnd: PropTypes.bool,
  isVisited: PropTypes.bool,
};

export default Node;
