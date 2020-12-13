import React, { useState } from "react";
import PropTypes from "prop-types";
import Node from "./Node/Node";
import "./Grid.css";

function Grid(props) {
  const [mousePressed, setMousePressed] = useState(false);

  const handleInteraction = (nodeProps) => {
    props.handleInteraction(nodeProps);
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
                    isDragging={props.draggingNode !== null}
                    row={rowIx}
                    col={colIx}
                    weight={col.weight}
                    isStart={col.isStart}
                    isEnd={col.isEnd}
                    isVisited={col.isVisited}
                    onMouseDown={(nodeProps) => {
                      handleInteraction(nodeProps);
                    }}
                    onMouseEnter={(nodeProps) => {
                      if (!mousePressed) return;
                      else handleInteraction(nodeProps);
                    }}
                    onMouseUp={(nodeProps) => {
                      if (props.draggingNode !== null)
                        props.handleDrop(nodeProps);
                    }}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Grid.propTypes = {
  grid: PropTypes.array,
  draggingNode: PropTypes.object,
  handleDrop: PropTypes.func,
  handleInteraction: PropTypes.func,
};

export default Grid;
