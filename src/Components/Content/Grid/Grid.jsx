import React, { useState } from "react";
import PropTypes from "prop-types";
import Node from "./Node/Node";
import "./Grid.css";

function Grid(props) {
  const [mousePressed, setMousePressed] = useState(false);

  const handleInteraction = (row, col) => {
    props.handleInteraction(row, col);
  };

  return (
    <table
      className="main-grid-container"
      onMouseDown={(e) => setMousePressed(true)}
      onMouseUp={(e) => setMousePressed(false)}
      onMouseLeave={(e) => setMousePressed(false)}
    >
      <tbody id="grid-body">
        {props.grid.map((row, rowIx) => {
          return (
            <tr key={`row-${rowIx}`} className="grid-row">
              {row.map((col, colIx) => {
                return (
                  <Node
                    key={`node-${rowIx}-${colIx}`}
                    row={rowIx}
                    col={colIx}
                    weight={col.weight}
                    isStart={col.isStart}
                    isEnd={col.isEnd}
                    isVisited={col.isVisited}
                    onMouseDown={(row, col) => {
                      handleInteraction(row, col);
                    }}
                    onMouseEnter={(row, col) => {
                      if (!mousePressed) return;
                      else handleInteraction(row, col);
                    }}
                  />
                );
              })}{" "}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Grid.propTypes = {
  grid: PropTypes.array,
  handleInteraction: PropTypes.func,
};

export default Grid;
