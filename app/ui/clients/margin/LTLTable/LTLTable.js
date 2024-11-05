"use client";
import React from "react";
import classes from "./table.module.css";
import { baseValues, LTLOptions } from "../options";

const LTLTable = () => {
  const headerItems = [...baseValues, ...LTLOptions];
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

export default LTLTable;
