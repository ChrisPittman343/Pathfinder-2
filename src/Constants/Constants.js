import dijkstra from "../Algorithms/Dijkstra";
import astar from "../Algorithms/AStar";
import dstar from "../Algorithms/DStar";

export const algorithms = [dijkstra, astar, dstar];
export const algorithmNames = ["Dijkstra's", "A*", "D*"];

export const speeds = [15, 9, 5];
export const speedNames = ["Slow", "Medium", "Fast"];

// eslint-disable-next-line import/no-anonymous-default-export
export default { algorithms, algorithmNames, speeds, speedNames };
