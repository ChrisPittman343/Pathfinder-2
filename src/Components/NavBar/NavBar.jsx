import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";
import Button from "../Button/Button";

function NavBar(props) {
  return (
    <div className="main-navbar-container">
      <div id="navbar">
        <Button color="yellow">Cool button</Button>
        <Button color="yellow visualize">Visualize</Button>
        <Button color="yellow">Cool button</Button>
      </div>
      <div id="yellow-stripe" />
      <div id="red-stripe" />
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
