"use client";
import React from "react";
import classes from "./table.module.css";
import AddNewButton from "../../addNewButton/AddNewButton";

const Table = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["add-new"]}>
          <AddNewButton path={"surcharge-types/create"} />
        </div>
      </div>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["name"]}>Name </p>
          <p className={classes["description"]}> Description</p>
          <p className={classes["comment"]}> Comment</p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            <p className={classes["name"]}>Name </p>
            <p className={classes["description"]}> Description</p>
            <p className={classes["comment"]}> Comment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
