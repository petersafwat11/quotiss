import React from "react";
import classes from "./checkboxFilter.module.css";
import CircleCheckbox from "../circleCheckbox/CircleChexbox";
const CheckBoxFilter = ({ title }) => {
  return (
    <div className={classes["checkbox"]}>
      <CircleCheckbox />
      {title}
    </div>
  );
};

export default CheckBoxFilter;
