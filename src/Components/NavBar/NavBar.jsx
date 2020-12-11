import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";
import Button from "../Button/Button";
import Visualize from "./Visualize/Visualize";
import Dropdown from "../Dropdown/Dropdown";

function NavBar(props) {
  const changeAlgorithm = (key) => {};

  const changePreset = (key) => {};

  const changeSpeed = (key) => {};

  return (
    <nav className="main-navbar-container">
      <div id="navbar">
        <Dropdown name="Algorithm" opts={["Dijkstra's", "A*", "D*", "Slug"]} />
        <Dropdown
          name="Preset"
          opts={["Random Maze", "Horizontal Gaps", "Vertical Gaps"]}
        />
        <Visualize onClick={(e) => props.visualize()} />
        <Button color="red" onClick={(e) => props.reset()}>
          Reset
        </Button>
        <Dropdown name="Speed" opts={["Slow", "Medium", "Fast"]} />
      </div>
      <div id="yellow-stripe" />
      <div id="red-stripe" />
    </nav>
  );
}

NavBar.propTypes = {
  reset: PropTypes.func,
  visualize: PropTypes.func,
};

export default NavBar;
