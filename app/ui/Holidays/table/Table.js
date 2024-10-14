"use client";
import React from "react";
import classes from "./table.module.css";
const Table = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["table"]}>
        <div className={classes["table-header"]}>
          <p className={classes["header-col"]}>Origin Country </p>
          <p className={classes["header-col"]}> Destination Country</p>
          <p className={classes["header-col"]}> Service</p>
          <p className={classes["header-col"]}>January</p>
          <p className={classes["header-col"]}>February</p>
          <p className={classes["header-col"]}>March</p>
          <p className={classes["header-col"]}>April</p>
          <p className={classes["header-col"]}>May</p>
          <p className={classes["header-col"]}>June</p>
          <p className={classes["header-col"]}>July</p>
          <p className={classes["header-col"]}>August</p>
          <p className={classes["header-col"]}>September</p>
          <p className={classes["header-col"]}>October</p>
          <p className={classes["header-col"]}>November</p>
          <p className={classes["header-col"]}>December</p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
          <p className={classes["data"]}>A </p>
            <p className={classes["data"]}>Gold Level</p>
            <p className={classes["data"]}>A Gold Level</p>
            <p className={classes["data"]}>A </p>
            <p className={classes["data"]}>Gold Level</p>
            <p className={classes["data"]}>A Gold Level</p>
            <p className={classes["data"]}>A </p>
            <p className={classes["data"]}>Gold Level</p>
            <p className={classes["data"]}>A Gold Level</p>
            <p className={classes["data"]}>A </p>
            <p className={classes["data"]}>Gold Level</p>
            <p className={classes["data"]}>A Gold Level</p>
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
