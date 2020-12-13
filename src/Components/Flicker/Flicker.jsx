import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Flicker.css";

const Flicker = (props) => {
  const [flickerIx, setFlickerIx] = useState(props.initialFlickerIx);

  const handleFlickerChange = (operation) => {
    if (operation === -1) {
      if (flickerIx === 0) return;
      setFlickerIx(flickerIx - 1);
    } else if (operation === 1) {
      if (flickerIx >= props.flickerValues.length - 1) return;
      setFlickerIx(flickerIx + 1);
    }
    console.log(props);
    props.onFlick(operation);
  };

  return (
    <div className="flicker-container">
      <div className="flicker-main">
        <button
          className="flicker-left"
          onClick={() => handleFlickerChange(-1)}
        >
          -
        </button>
        <div className="flicker-middle">{props.children}</div>
        <button
          className="flicker-right"
          onClick={() => handleFlickerChange(1)}
        >
          +
        </button>
      </div>
      <div className="flicker-value-display">
        {props.flickerValues[flickerIx]}
      </div>
    </div>
  );
};

Flicker.propTypes = {
  initialFlickerIx: PropTypes.number,
  flickerValues: PropTypes.array,
  onFlick: PropTypes.func,
};

export default Flicker;
