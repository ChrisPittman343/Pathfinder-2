import React from "react";
import React from "react";
import PropTypes from "prop-types";

function Node(props) {
  return <div></div>;
}

Node.propTypes = {
  weight: Number,
  isStart: Boolean,
  isEnd: Boolean,
  isVisited: Boolean,
};

export default Node;
