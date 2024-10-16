"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import AddNewButton from "../../addNewButton/AddNewButton";

const Table = () => {
  const [type, setType] = useState("FCL");
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["types"]}>
          <button
            onClick={() => {
              setType("FCL");
            }}
            className={classes[type === "FCL" ? "active-type" : "type"]}
          >
            {" "}
            FCL
          </button>
          <button
            onClick={() => {
              setType("LCL");
              console.log("type", type);
            }}
            className={classes[type === "LCL" ? "active-type" : "type"]}
          >
            LCL
          </button>
        </div>
        <AddNewButton params={{ type: type }} path={"margins/create"} />
      </div>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["name"]}>Name </p>
          <p className={classes["W-M"]}> W/M</p>
          <p className={classes["description"]}> Description</p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            <p className={classes["name"]}>Name </p>
            <p className={classes["W-M"]}> W/M</p>
            <p className={classes["description"]}> Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
