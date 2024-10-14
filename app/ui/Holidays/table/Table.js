"use client";
import React from "react";
import classes from "./table.module.css";
import AddNewButton from "../../addNewButton-2/AddNewButton";
const Table = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["origin-country"]}>Origin Country </p>
          <p className={classes["destination-country"]}> Destination Country</p>
          <p className={classes["service"]}>Service</p>
          <p className={classes["january"]}>January</p>
          <p className={classes["february"]}>February</p>
          <p className={classes["march"]}>March</p>
          <p className={classes["april"]}>April</p>
          <p className={classes["may"]}>May</p>
          <p className={classes["june"]}>June</p>
          <p className={classes["july"]}>July</p>
          <p className={classes["august"]}>August</p>
          <p className={classes["september"]}>September</p>
          <p className={classes["october"]}>October</p>
          <p className={classes["november"]}>November</p>
          <p className={classes["december"]}>December</p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            <p className={classes["origin-country"]}>Origin Country </p>
            <p className={classes["destination-country"]}>
              Destination Country
            </p>
            <p className={classes["service"]}>Service</p>
            <p className={classes["january"]}>January</p>
            <p className={classes["february"]}>February</p>
            <p className={classes["march"]}>March</p>
            <p className={classes["april"]}>April</p>
            <p className={classes["may"]}>May</p>
            <p className={classes["june"]}>June</p>
            <p className={classes["july"]}>July</p>
            <p className={classes["august"]}>August</p>
            <p className={classes["september"]}>September</p>
            <p className={classes["october"]}>October</p>
            <p className={classes["november"]}>November</p>
            <p className={classes["december"]}>December</p>
          </div>
        </div>
        <div className={classes["add-new"]}>
          <AddNewButton />
        </div>
      </div>
    </div>
  );
};

export default Table;
