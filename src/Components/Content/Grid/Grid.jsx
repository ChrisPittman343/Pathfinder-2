import React from "react";
import PropTypes from "prop-types";
import Node from "./Node/Node";

function Grid(props) {
  return (
    <div>
      <Node />
    </div>
  );
}

Grid.propTypes = {
  grid: "",
};

export default Grid;
