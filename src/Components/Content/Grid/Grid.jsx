import React from "react";
import PropTypes from "prop-types";
import Node from "./Node/Node";
import "./Grid.css";

function Grid(props) {
  return (
    <table className="main-grid-container">
      <tbody id="grid-body">
        {props.grid.map((row, rowIx) => {
          return (
            <tr key={`row-${rowIx}`} className="grid-row">
              {row.map((col, colIx) => {
                return (
                  <Node
                    key={`node-${rowIx}-${colIx}`}
                    weight={col.weight}
                    isStart={col.isStart}
                    isEnd={col.isEnd}
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
};

export default Grid;
