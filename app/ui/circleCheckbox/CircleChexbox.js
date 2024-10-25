import React from "react";
import classes from "./circleCheckbox.module.css";
const CircleCheckbox = ({ value, onChange }) => {
  return (
    <label className={classes["circle-checkbox"]}>
      <input
        checked={value}
        onChange={() => {
          onChange ? onChange() : "";
        }}
        type="checkbox"
        className={classes["checkbox"]}
      />
      <span className={classes["checkmark"]}></span>
    </label>
  );
};

export default CircleCheckbox;
