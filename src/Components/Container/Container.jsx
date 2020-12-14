import React, { Component } from "react";
import "./Container.css";
import NavBar from "../NavBar/NavBar";
import { algorithms, speeds, weights } from "../../Constants/Constants";
import ContentButtons from "../Content/ContentButtons/ContentButtons";
import Grid from "../Content/Grid/Grid";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      algoIx: 0,
      startNode: [14, 10],
      endNodes: [[14, 51]],
      draggingNode: null,
      currentWeightIx: 3,
      multidirectional: false,
      octal: false,
      speedLvl: 2,
    };
  }

  componentDidMount() {
    this.setState({ grid: getInitialGrid() });
  }

  /**
   * Handles hovering/clicking of nodes
   * @param {{row, col, weight, isStart, isEnd}} nodeProps
   */
  handleInteraction = (nodeProps) => {
    const { grid, currentWeightIx } = this.state;
    const { row, col, isStart, isEnd, weight } = nodeProps;
    const newGrid = grid;
    if (!this.state.draggingNode) {
      if (isStart || isEnd) {
        this.setState({ draggingNode: nodeProps });
      } else {
        newGrid[row][col].weight = weight !== 1 ? 1 : weights[currentWeightIx];
        this.setState({ grid: newGrid });
      }
    }
  };

  /**
   * Handles the dropping of a start/end node in another node
   * @param {{row, col, weight, isStart, isEnd}} nodeProps Props of the drop location
   */
  dropNode = (nodeProps) => {
    const { grid, draggingNode, endNodes } = this.state;
    const newGrid = grid;

    //Sets the node at the ORIGIN to be a new node
    newGrid[draggingNode.row][draggingNode.col] = {
      row: draggingNode.row,
      col: draggingNode.col,
      weight: 1,
      isStart: false,
      isEnd: false,
      isVisited: false,
    };

    //Sets the node at the DESTINATION to reflect the props of the origin
    newGrid[nodeProps.row][nodeProps.col] = {
      row: nodeProps.row,
      col: nodeProps.col,
      weight: draggingNode.weight,
      isStart: draggingNode.isStart,
      isEnd: draggingNode.isEnd,
      isVisited: false,
    };

    if (draggingNode.isStart)
      this.setState({
        grid: newGrid,
        startNode: [nodeProps.row, nodeProps.col],
        draggingNode: null,
      });
    else {
      const newEndNodes = endNodes;
      console.log(endNodes.indexOf([draggingNode.row, draggingNode.col]));
      newEndNodes[endNodes.indexOf([draggingNode.row, draggingNode.col])] = [
        nodeProps.row,
        nodeProps.col,
      ];
      this.setState({
        grid: newGrid,
        endNodes: newEndNodes,
        draggingNode: null,
      });
    }
  };

  //#region Content functions
  toggleMultidirectional = (bool) => {
    this.setState({ bidirectional: bool });
  };

  toggleOctagonal = (bool) => {
    this.setState({ octal: bool });
  };

  //Right now, weight = +-1, must be related to index
  changeWeighting = (operation) => {
    this.setState({ currentWeightIx: this.state.currentWeightIx + operation });
  };

  /**
   * Adds a new end node to the first possible node in the row of the 14th index (grid[14])
   * Note: to reach this function, it is known that the operation is within the correct bounds
   * @param {number} operation -1 or 1, which corresponds to removing or adding a node, respectively
   */
  changeNumEnds = (operation) => {
    let newEnds = this.state.endNodes;
    let newGrid = this.state.grid;
    if (operation === -1) {
      newEnds = newEnds.slice(0, newEnds.length - 2);
    } else if (operation === 1) {
      let i = 30;
      while (this.state.grid[14][i].isEnd || this.state.grid[14][i].isStart) {
        i++;
      }
      const newEnd = this.state.grid[14][i];
      newEnds.push([newEnd.row, newEnd.col]);
      newGrid[newEnd.row][newEnd.col].weight = 1;
      newGrid[newEnd.row][newEnd.col].isEnd = true;
    }
    this.setState({ grid: newGrid, endNodes: newEnds });
  };
  //#endregion

  //#region Navbar functions

  /**
   * Updates state's algorithm index
   * @param {number} optIx Index of algorithm in constants list
   */
  changeAlgorithm = (optIx) => {
    this.setState({ algoIx: optIx });
  };

  /**
   * Updates state's preset
   * @param {number} ix Index of preset in constants list
   */
  changePreset = (ix) => {};

  reset = () => {
    this.setState({
      grid: getInitialGrid(),
      algoIx: 0,
      speedLvl: 2,
      startNode: [14, 10],
      endNodes: [[14, 51]],
    });
  };

  /**
   * Updates state's speed index
   * @param {number} lvl Integer value of the speed level
   */
  changeSpeed = (lvl) => {
    this.setState({ speedLvl: lvl });
  };

  visualize = () => {
    const {
      grid,
      octal,
      multidirectional,
      speedLvl,
      algoIx,
      startNode,
    } = this.state;
    const orderedNodes = algorithms[algoIx](grid, startNode[0], startNode[1], {
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
      }, 100 + speeds[speedLvl] * i);
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
        150 + speeds[speedLvl] * i,
        previousNode
      );
      previousNode = previousNode.previousNode;
      i++;
    }
  };
  //#endregion

  render() {
    const { grid, algoIx, speedLvl, draggingNode } = this.state;
    return (
      <div className="main-container">
        <div id="background" />
        <NavBar
          initialState={[algoIx, 0, speedLvl]}
          changeAlgorithm={this.changeAlgorithm}
          changePreset={this.changePreset}
          visualize={() => this.visualize()}
          reset={this.reset}
          changeSpeed={this.changeSpeed}
        />
        <div className="main-content-container">
          <ContentButtons
            toggleOctagonal={this.toggleOctagonal}
            toggleMultidirectional={this.toggleMultidirectional}
            changeWeighting={this.changeWeighting}
            changeNumEnds={this.changeNumEnds}
          />
          <Grid
            grid={grid}
            draggingNode={draggingNode}
            handleDrop={this.dropNode}
            handleInteraction={this.handleInteraction}
          />
        </div>
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
      const node = newNode(i, k);
      row.push(node);
    }
    grid.push(row);
  }
  return grid;
};

const newNode = (i, k) => {
  return {
    row: i,
    col: k,
    weight: 1,
    isStart: i === 14 && k === 10,
    isEnd: i === 14 && k === 51,
    isVisited: false,
  };
};
