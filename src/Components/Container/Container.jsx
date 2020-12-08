import React, { Component } from "react";
import "./Container.css";
import Content from "../Content/Content";
import NavBar from "../NavBar/NavBar";
import Node from "../Content/Grid/Node/Node";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
    };
  }

  componentDidMount() {
    this.setState({ grid: getInitialGrid() });
  }

  render() {
    return (
      <div className="main-container">
        <NavBar />
        <Content />
        {this.state.grid.map((row, rowIx) => {
          return (
            <div>
              {row.map((col, colIx) => {
                return (
                  <Node
                    key={`${rowIx}-${colIx}`}
                    weight={col.weight}
                    isStart={col.isStart}
                    isEnd={col.isEnd}
                  />
                );
              })}{" "}
            </div>
          );
        })}
        {/* Modals go here? */}
      </div>
    );
  }
}

const getInitialGrid = () => {
  const grid = [];
  for (let i = 0; i < 27; i++) {
    const row = [];
    for (let k = 0; k < 61; k++) {
      const node = {
        weight: 1,
        isStart: i === 25 && k === 31,
        isEnd: i === 25 && k === 51,
      };
      row.push(node);
    }
    grid.push(row);
  }
  return grid;
};
