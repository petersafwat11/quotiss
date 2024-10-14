"use client";
import React from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";

const Table = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={classes["table"]}>
      <div className={classes["table-header"]}>
        <p className={classes["header-col"]}>Location </p>
        <p className={classes["header-col"]}> Kind </p>
        <p className={classes["header-col"]}>Code </p>
        <p className={classes["header-col"]}> Region</p>
        <p className={classes["header-col"]}>Country </p>
        <p className={classes["header-col"]}> Alias</p>
        <p className={classes["header-col"]}> Surcharges</p>
        <p className={classes["header-col"]}> Translations</p>
      </div>
      <div className={classes["body"]}>
        <div className={classes["row"]}>
          <p className={classes["header-col"]}>Location </p>
          <p className={classes["header-col"]}> Kind </p>
          <p className={classes["header-col"]}>Code </p>
          <p className={classes["header-col"]}> Region</p>
          <p className={classes["header-col"]}>Country </p>
          <p className={classes["header-col"]}> Alias</p>
          <p className={classes["header-col"]}> Surcharges</p>
          <p className={classes["header-col"]}> Translations</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
