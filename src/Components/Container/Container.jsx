import React, { Component } from "react";
import "./Container.css";
import Content from "../Content/Content";
import NavBar from "../NavBar/NavBar";
import algorithms from "../../Algorithms/Algorithms";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      algorithm: algorithms[0],
      currentWeight: Infinity,
      multidirectional: false,
      octal: false,
      speed: 10,
    };
  }

  componentDidMount() {
    this.setState({ grid: getInitialGrid() });
  }

  handleInteraction = (row, col) => {
    const { grid, currentWeight } = this.state;
    const newGrid = grid;
    if (newGrid[row][col].isStart || newGrid[row][col].isEnd) return;
    newGrid[row][col].weight =
      newGrid[row][col].weight !== 1 ? 1 : currentWeight;
    this.setState({ grid: newGrid });
  };

  //#region Content functions
  toggleMultidirectional = (bool) => {
    this.setState({ bidirectional: bool });
  };

  toggleOctagonal = (bool) => {
    this.setState({ octal: bool });
  };
  //#endregion

  //#region Navbar functions

  changeAlgorithm = (optIx) => {
    this.setState({ algorithm: algorithms[optIx] });
  };

  changePreset = (ix) => {};

  reset = () => {
    this.setState({ grid: getInitialGrid() });
  };

  changeSpeed = (lvl) => {};

  visualize = () => {
    const { grid, octal, multidirectional, speed } = this.state;
    const orderedNodes = this.state.algorithm(grid, 14, 10, {
      octal: octal,
      multidirectional: multidirectional,
    });

    let i = 0;

    //Exploration of nodes
    orderedNodes.forEach((node) => {
      setTimeout(() => {
        //grid[node.row][node.col].isVisited = true;
        //this.setState({ grid: grid });
        document.getElementById(`node-${node.row}-${node.col}`).className +=
          " node-visited";
      }, 200 + speed * i);
      i++;
    });

    //Highlighting of path
    let previousNode = orderedNodes[orderedNodes.length - 1].isEnd
      ? orderedNodes[orderedNodes.length - 1].previousNode
      : undefined;
    while (previousNode && !previousNode.isStart) {
      setTimeout(
        (node) => {
          document.getElementById(`node-${node.row}-${node.col}`).className +=
            " node-path";
        },
        200 + speed * i,
        previousNode
      );
      previousNode = previousNode.previousNode;
      i++;
    }
  };
  //#endregion

  render() {
    return (
      <div className="main-container">
        <NavBar reset={() => this.reset()} visualize={() => this.visualize()} />
        <Content
          grid={this.state.grid}
          handleInteraction={this.handleInteraction}
          toggleMultidirectional={this.toggleMultidirectional}
          toggleOctagonal={this.toggleOctagonal}
        />
        {/* Modals go here? */}
      </div>
    );
  }
}

const getInitialGrid = () => {
  const grid = [];
  for (let i = 0; i < 29; i++) {
    const row = [];
    for (let k = 0; k < 61; k++) {
      const node = {
        row: i,
        col: k,
        weight: 1,
        isStart: i === 14 && k === 10,
        isEnd: i === 14 && k === 51,
        isVisited: false,
      };
      row.push(node);
    }
    grid.push(row);
  }
  return grid;
};
