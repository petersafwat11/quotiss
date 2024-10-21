import React from "react";
import classes from "./group.module.css";
const group = ({ title, percentage, change, icon }) => {
  return (
    <div className={classes["group"]}>
      <div className={classes["top"]}>
        <h4 className={classes["title"]}>{title}</h4>
        {icon}
      </div>
      <p className={classes[""]}>{percentage}</p>
      <div className={classes["bottom"]}>
        <span className={classes["number"]}>{change}</span>
        <p className={classes["tag"]}>{tag}</p>
      </div>
    </div>
  );
};

export default group;
