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
        <p className={classes["header-col"]}>Load </p>
        <p className={classes["header-col"]}> Translations</p>
      </div>
      <div className={classes["body"]}>
        <div className={classes["row"]}>
          <p className={classes["data"]}>A </p>
          <p className={classes["data"]}>Gold Level</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
