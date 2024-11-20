import React from "react";
import classes from "./circleCheckbox.module.css";
const CircleCheckbox = ({ onChange, checked, itemName, type }) => {
  return (
    <label className={classes["circle-checkbox"]}>
      <input
        checked={checked}
        onChange={() => {
          type === "all" ? onChange("all") : onChange(itemName);
        }}
        type="checkbox"
        className={classes["checkbox"]}
      />
      <span className={classes["checkmark"]}></span>
    </label>
  );
};

export default CircleCheckbox;
