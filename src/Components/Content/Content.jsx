import React from "react";
import PropTypes from "prop-types";
import "./Content.css";
import ContentButtons from "./ContentButtons/ContentButtons";
import Grid from "./Grid/Grid";

const Content = (props) => {
  return (
    <div className="main-content-container">
      <ContentButtons
        toggleOctagonal={props.toggleOctagonal}
        toggleMultidirectional={props.toggleMultidirectional}
      />
      <Grid grid={props.grid} handleInteraction={props.handleInteraction} />
    </div>
  );
};

Content.propTypes = {
  grid: PropTypes.array,
  handleInteraction: PropTypes.func,
  toggleMultidirectional: PropTypes.func,
  toggleOctagonal: PropTypes.func,
};

export default Content;
