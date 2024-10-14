"use client";
import React from "react";
import classes from "./table.module.css";
const Table = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["types"]}>
          <p className={classes["type"]}> FCL</p>
          <p className={classes["type"]}> LCL</p>
        </div>
        <button onClick={() => {}} className={classes["button"]}>
          {" "}
        </button>
      </div>
      <div className={classes["table"]}>
        <div className={classes["table-header"]}>
          <p className={classes["header-col"]}>Name </p>
          <p className={classes["header-col"]}> W/M</p>
          <p className={classes["header-col"]}> Description</p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            <p className={classes["data"]}>A </p>
            <p className={classes["data"]}>Gold Level</p>
            <p className={classes["data"]}>A Gold Level</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
