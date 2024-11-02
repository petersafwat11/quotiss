"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";

const Table = ({ data, rows, search }) => {
  const router = useRouter();
  const handleItemClick = (id) => {
    router.push(`/charges/${id}`);
  };

  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        <p className={classes["location"]}>name</p>
        <p className={classes["kind"]}>Kind</p>
        <p className={classes["code"]}>Code</p>
        <p className={classes["region"]}>Region</p>
        <p className={classes["country"]}>Country</p>
        {/* <p className={classes["alias"]}>Alias</p> */}
        <p className={classes["surcharges"]}>Surcharges</p>
        <p className={classes["translations"]}>Translations</p>
      </div>
      <div className={classes["body"]}>
        {data.length > 0 &&
          data.map((item, index) => (
            <div
              onClick={() => {
                handleItemClick(item.id);
              }}
              key={index}
              className={classes["row"]}
            >
              <p className={classes["location"]}>{item.name}</p>
              <p className={classes["kind"]}>{item.kind}</p>
              <p className={classes["code"]}>{item.code}</p>
              <p className={classes["region"]}>{item.region}</p>
              <p className={classes["country"]}>{item.country}</p>
              {/* // not sure */}
              {/* <p className={classes["alias"]}>{item.alias}</p> */}
              <p
                onClick={() => {
                  console.log(JSON.parse(item.surcharges[0]));
                }}
                className={classes["surcharges"]}
              >
                {item.surcharges.length > 0 &&
                  JSON.parse(item.surcharges[0])?.name}
              </p>
              <p className={classes["translations"]}>{item.translations}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
