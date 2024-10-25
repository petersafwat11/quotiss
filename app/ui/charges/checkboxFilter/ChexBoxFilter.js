"use client";
import React from "react";
import classes from "./checkboxFilter.module.css";
import CircleCheckbox from "../../circleCheckbox/CircleChexbox";
const ChexBoxFilter = () => {
  return (
    <div className={classes["checkbox"]}>
      <CircleCheckbox />
      Show with charges
    </div>
  );
};

export default ChexBoxFilter;
