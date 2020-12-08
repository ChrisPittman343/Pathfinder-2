import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import "./ContentButtons.css";

function ContentButtons(props) {
  return (
    <div className="main-content-btns-container">
      <Button color="red">Content Button</Button>
      <Button color="red">Content Button</Button>
      <Button color="red">Content Button</Button>
    </div>
  );
}

ContentButtons.propTypes = {
  //Probably some booleans for settings, like bidirectional
};

export default ContentButtons;
