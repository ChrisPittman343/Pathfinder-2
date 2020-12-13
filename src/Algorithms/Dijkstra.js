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
export function dijkstra(
  grid,
  row,
  col,
  opts = { multidirectional: false, octal: false }
) {
  const exploredNodes = [];
  const nodeQueue = [];
  if (!opts.octal) nodeQueue.push(...exploreNeighbors(grid, grid[row][col]));
  else nodeQueue.push(...exploreNeighbors_octagonal(grid, grid[row][col]));

  while (nodeQueue.length > 0) {
    nodeQueue.sort((a, b) => a.weight - b.weight);
    const node = nodeQueue.shift();
    if (node.weight === Infinity || node.isStart || node.isVisited) continue;
    else exploredNodes.push(node);
    grid[node.row][node.col].isVisited = true;
    if (node.isEnd) break;
    if (!opts.octal) nodeQueue.push(...exploreNeighbors(grid, node));
    else nodeQueue.push(...exploreNeighbors_octagonal(grid, node));
  }

  return exploredNodes;
}

export default dijkstra;
