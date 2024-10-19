"use client";
import React from "react";
import classes from "./table.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Table = () => {
  const types = [
    "FCL",
    "FCL",
    "LCL",
    "LCL",
    "AIR",
    "AIRTARIFF",
    "LTL",
    "FTL",
    "MANUAL",
    "MULTI",
  ];
  const { replace } = useRouter();
  const path = usePathname();
  const handleClick = useDebouncedCallback((type) => {
    replace(`${path}/type`);
  }, 200);

  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        <p className={classes["load"]}>Load </p>
        <p className={classes["translations"]}> Translations</p>
      </div>

      <div className={classes["body"]}>
        {types.map((type, index) => (
          <div
            onClick={() => {
              handleClick(type);
            }}
            key={index}
            className={classes["row"]}
          >
            <p className={classes["load"]}>{type}</p>
            <p className={classes["translations"]}>en</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
