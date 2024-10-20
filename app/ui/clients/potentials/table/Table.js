"use client";
import React from "react";
import classes from "./table.module.css";

const Table = () => {
  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        <p className={classes["from-country"]}>From Country</p>
        <p className={classes["from-location"]}>From Location</p>
        <p className={classes["to-location"]}>To Location</p>
        <p className={classes["type"]}>Type</p>
        <p className={classes["mode"]}>Mode</p>
        <p className={classes["total"]}>Total</p>
        <p className={classes["volume"]}>Volume</p>
        <p className={classes["unit"]}>Unit</p>
      </div>
      <div className={classes["body"]}>
        <div className={classes["row"]}>
          <p className={classes["from-country"]}>From Country</p>
          <p className={classes["from-location"]}>From Location</p>
          <p className={classes["to-location"]}>To Location</p>
          <p className={classes["type"]}>Type</p>
          <p className={classes["mode"]}>Mode</p>
          <p className={classes["total"]}>Total</p>
          <p className={classes["volume"]}>Volume</p>
          <p className={classes["unit"]}>Unit</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
