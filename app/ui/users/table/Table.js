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
          <p className={classes["action"]}>Clear Selection</p>
          <p className={classes["action"]}>Edit Email</p>
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
        <div className={classes["header"]}>
          <div></div>
          <p className={classes["header-col"]}>Name </p>
          <p className={classes["header-col"]}> Team</p>
          <p className={classes["header-col"]}>Organization </p>
          <p className={classes["header-col"]}> Email</p>
          <p className={classes["header-col"]}>Role </p>
          <p className={classes["header-col"]}> Active</p>
          <p className={classes["header-col"]}> Last Active</p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            <div></div>

            <p className={classes["data"]}>A </p>
            <p className={classes["data"]}>Gold Level</p>
            <p className={classes["data"]}>A Gold Level</p>
            <p className={classes["data"]}>A </p>
            <p className={classes["data"]}>Gold Level</p>
            <p className={classes["data"]}>A Gold Level</p>
            <p className={classes["data"]}>A Gold Level</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
