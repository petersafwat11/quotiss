"use client";
import React from "react";
import classes from "./table.module.css";
import { baseValues, LCLOptions } from "../options";

const LCLTable = () => {
  const headerItems = [...baseValues, ...LCLOptions];
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

export default LCLTable;
