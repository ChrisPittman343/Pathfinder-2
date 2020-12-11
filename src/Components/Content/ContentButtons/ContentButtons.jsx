import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import "./ContentButtons.css";
import Checkbox from "../../Checkbox/Checkbox";

function ContentButtons(props) {
  return (
    <div className="main-content-btns-container">
      <Checkbox onCheckChange={props.toggleMultidirectional}>
        Multi-directional
      </Checkbox>
      <Checkbox onCheckChange={props.toggleOctagonal}>Octagonal</Checkbox>
      <Button color="blue">Weight Slider</Button>
    </div>
  );
}

ContentButtons.propTypes = {
  toggleMultidirectional: PropTypes.func,
  toggleOctagonal: PropTypes.func,
};

export default ContentButtons;
