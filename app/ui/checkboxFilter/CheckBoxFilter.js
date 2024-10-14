import React from "react";
import classes from "./checkboxFilter.module.css";
import CircleChexbox from "../circleCheckbox/CircleChexbox";
const CheckBoxFilter = ({ title }) => {
  return (
    <div className={classes["checkbox"]}>
      <CircleChexbox />
      {title}
    </div>
  );
};

export default CheckBoxFilter;
