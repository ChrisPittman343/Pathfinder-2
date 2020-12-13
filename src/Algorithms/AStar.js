import {
  exploreNeighbors,
  exploreNeighbors_octagonal,
} from "./utils/exploreNeighbors";

/**
 * Finds the shortest path from start to end using dijkstra's algorithm.
 * @param {{row, col, weight, isStart, isEnd, isVisited}[][]} grid Matrix of nodes.
 * @param {number} row Start node's row.
 * @param {number} col Start node's column.
 * @param {Object} [opts] Additional search options (bidirectional, octal).
 * @returns {{row, col, weight, isStart, isEnd, previousNode}[]} Visited nodes in order
 */
export function astar(
  grid,
  row,
  col,
  opts = { multidirectional: false, octal: false }
) {}
export default astar;
