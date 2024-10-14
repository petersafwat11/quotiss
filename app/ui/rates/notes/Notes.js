import React from "react";
import classes from './Restrictions.module.css'

const Notes = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["note"]}></div>
      <div className={classes["note"]}></div>
    </div>
  );
};

export default Notes;
