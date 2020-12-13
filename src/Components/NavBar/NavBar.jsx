import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";
import Button from "../Button/Button";
import Visualize from "./Visualize/Visualize";
import Dropdown from "../Dropdown/Dropdown";
import { algorithmNames, speedNames } from "../../Constants/Constants";

function NavBar(props) {
  return (
    <nav className="main-navbar-container">
      <div id="navbar">
        <Dropdown
          name="Algorithm"
          opts={algorithmNames}
          initialOpt={props.initialState[0]}
          onOptChange={props.changeAlgorithm}
        />
        <Dropdown
          name="Preset"
          opts={["Random Maze", "Horizontal Gaps", "Vertical Gaps"]}
          initialOpt={props.initialState[1]}
          onOptChange={props.changePreset}
        />
        <Visualize onClick={() => props.visualize()} />
        <Button color="red" onClick={() => props.reset()}>
          Reset
        </Button>
        <Dropdown
          name="Speed"
          opts={speedNames}
          initialOpt={props.initialState[2]}
          onOptChange={props.changeSpeed}
        />
      </div>
      {/*
      <div id="yellow-stripe" />
      <div id="red-stripe" /> */}
    </nav>
  );
}

NavBar.propTypes = {
  initialState: PropTypes.array,
  changeAlgorithm: PropTypes.func,
  changePreset: PropTypes.func,
  visualize: PropTypes.func,
  reset: PropTypes.func,
  changeSpeed: PropTypes.func,
};

export default NavBar;
