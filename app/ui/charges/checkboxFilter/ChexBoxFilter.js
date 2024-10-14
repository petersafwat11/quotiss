import React from "react";
import classes from "./checkboxFilter.module.css";
import CircleChexbox from "../../circleCheckbox/CircleChexbox";
const ChexBoxFilter = () => {
  return (
    <div className={classes['checkbox']}>
      <CircleChexbox />
      Show with charges
    </div>
  );
};

export default ChexBoxFilter;
