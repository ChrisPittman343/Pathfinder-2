import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";
import Button from "../Button/Button";
import Visualize from "./Visualize/Visualize";
import Dropdown from "../Dropdown/Dropdown";

function NavBar(props) {
  return (
    <div className="main-navbar-container">
      <div id="navbar">
        <Button color="red">Algorithms</Button>
        <Button color="red">Presets</Button>
        <Visualize onClick={(e) => console.log(e)} />
        <Button color="yellow">Reset</Button>
        <Dropdown opts={["Thing 1", "Thing 2222222222", "Thing 3"]} />
      </div>
      <div id="yellow-stripe" />
      <div id="red-stripe" />
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
