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
        <p className={classes["header-col"]}> Origin Locations</p>
        <p className={classes["header-col"]}> Origin Country</p>
        <p className={classes["header-col"]}>Destination Locations </p>
        <p className={classes["header-col"]}>Destination Country </p>
        <p className={classes["header-col"]}>Margin Type</p>
        <p className={classes["header-col"]}>20_dc</p>
        <p className={classes["header-col"]}>40_dc</p>
        <p className={classes["header-col"]}>40_hc</p>
        <p className={classes["header-col"]}>45_hc</p>
        <p className={classes["header-col"]}>20_nor</p>
        <p className={classes["header-col"]}>40_nor</p>
        <p className={classes["header-col"]}>20_reef</p>
        <p className={classes["header-col"]}>40_hreef</p>
        <p className={classes["header-col"]}>45_plwd</p>
        <p className={classes["header-col"]}>20_ot</p>
        <p className={classes["header-col"]}>40_ot</p>
        <p className={classes["header-col"]}>20_fr</p>
        <p className={classes["header-col"]}>40_fr</p>
        <p className={classes["header-col"]}>20_tank</p>
        <p className={classes["header-col"]}>40_tank</p>
      </div>
      <div className={classes["body"]}>
        <div className={classes["row"]}>
          <p className={classes["header-col"]}> Origin Locations</p>
          <p className={classes["header-col"]}> Origin Country</p>
          <p className={classes["header-col"]}>Destination Locations </p>
          <p className={classes["header-col"]}>Destination Country </p>
          <p className={classes["header-col"]}>Margin Type</p>
          <p className={classes["header-col"]}>20_dc</p>
          <p className={classes["header-col"]}>40_dc</p>
          <p className={classes["header-col"]}>40_hc</p>
          <p className={classes["header-col"]}>45_hc</p>
          <p className={classes["header-col"]}>20_nor</p>
          <p className={classes["header-col"]}>40_nor</p>
          <p className={classes["header-col"]}>20_reef</p>
          <p className={classes["header-col"]}>40_hreef</p>
          <p className={classes["header-col"]}>45_plwd</p>
          <p className={classes["header-col"]}>20_ot</p>
          <p className={classes["header-col"]}>40_ot</p>
          <p className={classes["header-col"]}>20_fr</p>
          <p className={classes["header-col"]}>40_fr</p>
          <p className={classes["header-col"]}>20_tank</p>
          <p className={classes["header-col"]}>40_tank</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
