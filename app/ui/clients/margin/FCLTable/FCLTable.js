"use client";
import React from "react";
import classes from "./table.module.css";
import { baseValues, FCLOptions } from "../options";

const FCLTable = () => {
  const headerItems = [...baseValues, ...FCLOptions];
  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        {headerItems.map((item, index) => (
          <p key={index} className={classes["name"]}>
            {item}
          </p>
        ))}
      </div>
      <div className={classes["body"]}>
        <div className={classes["row"]}>
          {headerItems.map((item, index) => (
            <p key={index} className={classes["name"]}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FCLTable;
