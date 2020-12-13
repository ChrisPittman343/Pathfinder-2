import React from "react";
import PropTypes from "prop-types";
import "./Node.css";

function Node(props) {
  const { row, col, weight, isStart, isEnd, isVisited, isDragging } = props;
  const extraClass = isStart
    ? "node-start"
    : isEnd
    ? "node-end"
    : weight === Infinity
    ? "node-wall"
    : weight !== 0
    ? `node-w${weight}`
    : "";
  const visitedClass = isVisited ? "node-visited" : "";

  const dragClass = isDragging ? "node-possible-drop" : "";

  return (
    <td
      id={`node-${row}-${col}`}
      onMouseDown={() => props.onMouseDown(props)}
      onMouseEnter={() => props.onMouseEnter(props)}
      onMouseUp={() => props.onMouseUp(props)}
      className={`node ${extraClass} ${visitedClass} ${dragClass}`}
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
  isDragging: PropTypes.bool,
};

export default Node;
