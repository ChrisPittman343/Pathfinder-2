/**
 * Returns an array of all nodes at cardinal directions of a node at [row][col].
 * @param {{row, col, weight, isStart, isEnd}[][]} grid Matrix of nodes.
 * @param {{row, col, weight, isStart, isEnd}} node Node.
 * @returns {{row, col, weight, isStart, isEnd, previousNode}[]} neighbors
 */
export function exploreNeighbors(grid, node) {
  const neighbors = [];
  const { row, col, weight } = node;
  const h = grid.length - 1;
  const w = grid[0].length - 1;

  if (row > 0) neighbors.push(grid[row - 1][col]); //Up

  if (col < w) neighbors.push(grid[row][col + 1]); //Right

  if (row < h) neighbors.push(grid[row + 1][col]); //Down

  if (col > 0) neighbors.push(grid[row][col - 1]); //Left

  neighbors.forEach((neighbor) => {
    if (!neighbor.previousNode) {
      neighbor.previousNode = node;
      neighbor.weight += node.weight;
    }
  });

  return neighbors;
}

/**
 * Returns an array of all nodes surrounding a node at [row][col].
 * @param {{row, col, weight, isStart, isEnd}[][]} grid Matrix of nodes.
 * @param {number} node Node.
 * @returns {{row, col, weight, isStart, isEnd, previousNode}[]} neighbors
 */
export function exploreNeighbors_octagonal(grid, node) {
  const neighbors = [];
  const neighbors_oct = [];
  const { row, col, weight } = node;
  const h = grid.length - 1;
  const w = grid[0].length - 1;

  if (row > 0) {
    neighbors.push(grid[row - 1][col]); //Up
    if (col < w) {
      neighbors_oct.push(grid[row - 1][col + 1]); //Up + Right
    }
  }

  if (col < w) {
    neighbors.push(grid[row][col + 1]); //Right
    if (row < h) {
      neighbors_oct.push(grid[row + 1][col + 1]); //Down + Right
    }
  }

  if (row < h) {
    neighbors.push(grid[row + 1][col]); //Down
    if (col > 0) {
      neighbors_oct.push(grid[row + 1][col - 1]); //Down + Left
    }
  }

  if (col > 0) {
    neighbors.push(grid[row][col - 1]); //Left
    if (row > 0) {
      neighbors_oct.push(grid[row - 1][col - 1]); //Up + Left
    }
  }

  neighbors.forEach((neighbor) => {
    if (!neighbor.previousNode) {
      neighbor.previousNode = grid[row][col];
      neighbor.weight += node.weight;
    }
  });

  neighbors_oct.forEach((neighbor) => {
    if (!neighbor.previousNode) {
      neighbor.previousNode = node;
      neighbor.weight *= 1.4142;
      neighbor.weight += node.weight;
    }
  });

  return [...neighbors, ...neighbors_oct];
}

export default { exploreNeighbors, exploreNeighbors_octagonal };
