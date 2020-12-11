import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Dropdown.css";
import downArrow from "./downArrow.png";
import upArrow from "./upArrow.png";
import Button from "../Button/Button";

function Dropdown(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={`dropdown-selected`}>
        <span className="dropdown-text">{props.name}</span>
        {expanded ? (
          <img className="dropdown-arrow-icon" src={upArrow} alt="A" />
        ) : (
          <img className="dropdown-arrow-icon" src={downArrow} alt="v" />
        )}
      </div>
      {expanded ? (
        <ul className="dropdown-options-menu">
          {props.opts.map((opt, optIx) => {
            return (
              <li key={optIx} className="dropdown-opt" accessKey={optIx}>
                <Button
                  color={optIx % 2 === 0 ? "yellow" : "red"}
                  onClick={() => props.onOptChange(optIx)}
                >
                  {opt}
                </Button>
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string,
  opts: PropTypes.arrayOf(PropTypes.string),
  onOptChange: PropTypes.func,
};

export default Dropdown;
