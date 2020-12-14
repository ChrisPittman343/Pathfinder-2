import React from "react";
import PropTypes from "prop-types";
import "./ContentButtons.css";
import Checkbox from "../../Checkbox/Checkbox";
import Flicker from "../../Flicker/Flicker";

function ContentButtons(props) {
  return (
    <div className="main-content-btns-container">
      <Checkbox onCheckChange={props.toggleMultidirectional}>
        Multi-directional
      </Checkbox>
      <Checkbox onCheckChange={props.toggleOctagonal}>Octagonal</Checkbox>
      <Flicker
        onFlick={props.changeWeighting}
        initialFlickerIx={3}
        flickerValues={[2, 4, 8, Infinity]}
      >
        Wall Weight
      </Flicker>
      <Flicker
        onFlick={props.changeNumEnds}
        initialFlickerIx={0}
        flickerValues={[1, 2, 3, 4, 5]}
      >
        End Nodes
      </Flicker>
    </div>
  );
}

ContentButtons.propTypes = {
  toggleMultidirectional: PropTypes.func,
  toggleOctagonal: PropTypes.func,
  changeWeighting: PropTypes.func,
  changeNumEnds: PropTypes.func,
};

export default ContentButtons;
