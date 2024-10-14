"use client";
import React from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";

const Table = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        <p className={classes["load"]}>Load </p>
        <p className={classes["translations"]}> Translations</p>
      </div>
      <div className={classes["body"]}>
        <div className={classes["row"]}>
          <p className={classes["load"]}>Load </p>
          <p className={classes["translations"]}> Translations</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
