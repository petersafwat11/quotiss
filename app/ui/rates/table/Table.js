"use client";
import React from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";

const Table = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["actions"]}>
          <button className={classes["action"]}>clear Selection</button>={" "}
          <button className={classes["action"]}>Unarchive</button>
          <button className={classes["action"]}>Archive</button>
        </div>
        <button
          onClick={() => {
            router.push("/surcharge-type/create");
          }}
          className={classes["button"]}
        >
          Add New
        </button>
      </div>
      <div className={classes["table"]}>
        <div className={classes["table-header"]}>
          <p className={classes["header-col"]}> Status</p>
          <p className={classes["header-col"]}> Name</p>
          <p className={classes["header-col"]}>Service </p>
          <p className={classes["header-col"]}> Contract Number</p>
          <p className={classes["header-col"]}>Form </p>
          <p className={classes["header-col"]}> Till</p>
          <p className={classes["header-col"]}>Base Origin </p>
          <p className={classes["header-col"]}> Base Dest</p>
          <p className={classes["header-col"]}>Curr. </p>
          <p className={classes["header-col"]}> Int.</p>
          <p className={classes["header-col"]}> Ext.</p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            <p className={classes["header-col"]}> Status</p>
            <p className={classes["header-col"]}> Name</p>
            <p className={classes["header-col"]}>Service </p>
            <p className={classes["header-col"]}> Contract Number</p>
            <p className={classes["header-col"]}>Form </p>
            <p className={classes["header-col"]}> Till</p>
            <p className={classes["header-col"]}>Base Origin </p>
            <p className={classes["header-col"]}> Base Dest</p>
            <p className={classes["header-col"]}>Curr. </p>
            <p className={classes["header-col"]}> Int.</p>
            <p className={classes["header-col"]}> Ext.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
