"use client";
import React from "react";
import classes from "./table.module.css";

const Table = () => {
  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        <p className={classes["name"]}>Name</p>
        <p className={classes["email"]}>E-mail</p>
        <p className={classes["phone"]}>Phone</p>
        <p className={classes["active"]}>Active</p>
        <p className={classes["password"]}>Password</p>
        <p className={classes["delete"]}></p>
      </div>
      <div className={classes["body"]}>
        <div className={classes["row"]}>
          <p className={classes["name"]}>Name</p>
          <p className={classes["email"]}>E-mail</p>
          <p className={classes["phone"]}>Phone</p>
          <p className={classes["active"]}>Active</p>
          <p className={classes["password"]}>Password</p>
          <button className={classes["delete"]}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
