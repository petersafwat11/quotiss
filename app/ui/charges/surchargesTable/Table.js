"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";
import MarginFilter from "../../rates/marginFilter/MarginFilter";
import AddNewButton from "../../addNewButton-2/AddNewButton";

const Table = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [marginFilterValue, setMarginFilterValue] = useState("45' HC");
  const [filterValue, setFilterValue] = useState("45' HC");
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
    <div className={"sub-form"}>
      <div className={classes["filters"]}>
        <div className={classes["filter"]}>
          <p className={classes["filter-name"]}>Service</p>
          <MarginFilter
            filterValue={marginFilterValue}
            setFilterValue={setMarginFilterValue}
          />
        </div>
        <div className={classes["filter"]}>
          <p className={classes["filter-name"]}> Container type</p>
          <MarginFilter
            filterValue={filterValue}
            setFilterValue={setMarginFilterValue}
          />
        </div>
      </div>

      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["surcharge_type"]}>Surcharge_type</p>
          <p className={classes["name"]}>Name</p>
          <p className={classes["type"]}>Type</p>
          <p className={classes["online"]}>Online</p>
          <p className={classes["service"]}>Service</p>
          <p className={classes["sort_order"]}>Sort_order</p>
          <p className={classes["shipment"]}>Shipment</p>
          <p className={classes["currency"]}>Currency</p>
          {values.map((item, index) => (
            <p key={index} className={classes["container-type"]}>
              {item}
            </p>
          ))}
          <p className={classes["delete"]}></p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            <p className={classes["surcharge_type"]}>Surcharge_type</p>
            <p className={classes["name"]}>Name</p>
            <p className={classes["type"]}>Type</p>
            <p className={classes["online"]}>Online</p>
            <p className={classes["service"]}>Service</p>
            <p className={classes["sort_order"]}>Sort_order</p>
            <p className={classes["shipment"]}>Shipment</p>
            <p className={classes["currency"]}>Currency</p>
            {values.map((item, index) => (
              <p key={index} className={classes["container-type"]}>
                {item}
              </p>
            ))}
            <p className={classes["delete"]}></p>
          </div>
        </div>
        <div className={classes["add-btn"]}>
          <AddNewButton />
        </div>
      </div>
    </div>
  );
};

export default Table;
