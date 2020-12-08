import React from "react";
import PropTypes from "prop-types";
import "./Content.css";
import ContentButtons from "./ContentButtons/ContentButtons";
import Grid from "./Grid/Grid";

const Content = (props) => {
  return (
    <div className="main-content-container">
      <ContentButtons />
      <Grid />
    </div>
  );
};

Content.propTypes = {};

export default Content;
