"use client";
import React from "react";
import classes from "./table.module.css";

const OriginTable = () => {
  const values = [
    "20' DC",
    "40' DC",
    "40' HC",
    "45' HC",
    "20' NOR",
    "40' NOR",
    "20' REEF",
    "40' HREEF",
    "45' PLWD",
    "20' OT",
    "40' OT",
    "20' FR",
    "40' FR",
    "20' TANK",
    "40' TANK",
  ];

  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        <p className={classes["name"]}> Name</p>
        <p className={classes["country"]}> Country</p>
        <p className={classes["price-based-on"]}>Price Based On </p>
        <p className={classes["comment"]}>Comment </p>
        {values.map((item, index) => (
          <p key={index} className={classes["container-type"]}>
            {item}
          </p>
        ))}
      </div>
      <div className={classes["body"]}>
        <div className={classes["row"]}>
          <p className={classes["name"]}> Name</p>
          <p className={classes["country"]}> Country</p>
          <p className={classes["price-based-on"]}>Price Based On </p>
          <p className={classes["comment"]}>Comment </p>
          {values.map((item, index) => (
            <p key={index} className={classes["container-type"]}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OriginTable;
