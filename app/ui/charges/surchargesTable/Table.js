"use client";
import React from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";
import Filter from "../filter/Filter";

const Table = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={classes["container"]}>
      <div className={classes["filters"]}>
        <div className={classes["filter"]}>
          <p className={classes["filter-name"]}>Service</p>
          <Filter />
        </div>
        <div className={classes["filter"]}>
          <p className={classes["filter-name"]}> Container type</p>
          <Filter />
        </div>
      </div>

      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["header-col"]}>Surcharge_type</p>
          <p className={classes["header-col"]}>Name</p>
          <p className={classes["header-col"]}>Type</p>
          <p className={classes["header-col"]}>Online</p>
          <p className={classes["header-col"]}>Service</p>
          <p className={classes["header-col"]}>Sort_order</p>
          <p className={classes["header-col"]}>Shipment</p>
          <p className={classes["header-col"]}>Currency</p>
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
            <p className={classes["header-col"]}>Surcharge_type</p>
            <p className={classes["header-col"]}>Name</p>
            <p className={classes["header-col"]}>Type</p>
            <p className={classes["header-col"]}>Online</p>
            <p className={classes["header-col"]}>Service</p>
            <p className={classes["header-col"]}>Sort_order</p>
            <p className={classes["header-col"]}>Shipment</p>
            <p className={classes["header-col"]}>Currency</p>
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
    </div>
  );
};

export default Table;
