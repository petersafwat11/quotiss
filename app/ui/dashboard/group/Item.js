import React from "react";
import classes from "./group.module.css";
const Item = ({ title, percentage, change, icon, text }) => {
  return (
    <div className={classes["group"]}>
      <div className={classes["top"]}>
        <h4 className={classes["title"]}>{title}</h4>
        <div className={classes["icon"]}>{icon}</div>
      </div>
      <p className={classes["center-text"]}>{percentage}</p>
      <div className={classes["bottom"]}>
        <span className={classes["number"]}>{change}</span>
        <p className={classes["tag"]}>{text}</p>
      </div>
    </div>
  );
};

export default Item;
