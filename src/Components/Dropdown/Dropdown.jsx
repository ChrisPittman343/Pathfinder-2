import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Dropdown.css";

function Dropdown(props) {
  const [hovered, setHover] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        <span>Dropdown v</span>
      </div>
      {hovered ? (
        <ul className="dropdown-options-menu">
          {props.opts.map((opt, optIx) => {
            return (
              <li key={optIx} className="dropdown-opt" accessKey={optIx}>
                <button className="dropdown-opt-btn">{opt}</button>
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
  opts: PropTypes.arrayOf(PropTypes.string),
};

export default Dropdown;
