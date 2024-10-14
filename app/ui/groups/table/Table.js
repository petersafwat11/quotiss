"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";

const Table = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onGroupClick = (id) => {
    router.push(`${pathname}/${id}`);
  };
  return (
    <>
      <div className={classes["container"]}>
        <div className={classes["table"]}>
          <div className={classes["header"]}>
            <p className={classes["header-col"]}>Name</p>
            <p className={classes["header-col"]}>Location</p>
          </div>
          <div className={classes["body"]}>
            <div onClick={onGroupClick("fuck")} className={classes["row"]}>
              <p className={classes["data"]}>Gold Level</p>
              <p className={classes["data"]}>A Gold Level</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
