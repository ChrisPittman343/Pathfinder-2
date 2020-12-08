import React from "react";
import PropTypes from "prop-types";
import "./Content.css";
import ContentButtons from "./ContentButtons/ContentButtons";
import Grid from "./Grid/Grid";

const Content = (props) => {
  return (
    <div className="main-content-container">
      <ContentButtons />
      <Grid grid={props.grid} />
    </div>
  );
};

Content.propTypes = {
  grid: PropTypes.array,
};

export default Content;
