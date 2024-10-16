import React from "react";
import classes from "./circleCheckbox.module.css";
const CircleCheckbox = () => {
  return (
    <label className={classes["circle-checkbox"]}>
      <input type="checkbox" className={classes["checkbox"]} />
      <span className={classes["checkmark"]}></span>
    </label>
  );
};

export default CircleCheckbox;
