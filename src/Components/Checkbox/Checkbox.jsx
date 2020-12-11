import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";
import Button from "../Button/Button";
import check from "./check.png";
import x from "./x.png";

const Checkbox = ({ children, ...props }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    props.onCheckChange(checked);
  }, [checked]);

  return (
    <div className="checkbox-container">
      <div className="check-box ">
        <img className="check-img" src={checked ? check : x} />
      </div>
      <div className="checkbox-btn">
        <Button color="blue" onClick={() => setChecked(!checked)}>
          {children}
        </Button>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  onCheckChange: PropTypes.func,
};

export default Checkbox;
