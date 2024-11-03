"use client";
import React, { useEffect, useState } from "react";
import classes from "./table.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { RiShip2Fill } from "react-icons/ri";
import { FaTrain } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";

const Table = ({ data }) => {
  const types = [
    { name: "FCL", type: "port" },
    { name: "FCL", type: "rail" },
    { name: "LCL", type: "port" },
    { name: "LCL", type: "rail" },
    { name: "AIR", type: "air" },
    { name: "LTL", type: "road" },
    { name: "FTL", type: "road" },
    { name: "MANUAL", type: null },
    { name: "MULTI", type: null },
  ];
  const usableData = data?.data?.data;
  const router = useRouter();
  const [tableData, setTableData] = useState(usableData ? usableData : []);

  const { replace } = useRouter();
  const path = usePathname();
  const handleClick = useDebouncedCallback((item) => {
    replace(`${path}/${item.name}-${item.type}`);
  }, 200);

  const getLangs = (item) => {
    const langs =
      tableData.find((term) => term.type === `${item.name}-${item.type}`)
        ?.language || [];
    const langsString = langs.join(", ");
    return langsString;
  };
  useEffect(() => {
    const usableData = data?.data?.data;
    setTableData(usableData);
  }, [data]);

  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        <p className={classes["load"]}>Load </p>
        <p className={classes["translations"]}> Translations</p>
      </div>

      <div className={classes["body"]}>
        {types.map((item, index) => (
          <div
            onClick={() => {
              handleClick(item);
            }}
            key={index}
            className={classes["row"]}
          >
            <div className={classes["load"]}>
              {item.type === "port" ? (
                <RiShip2Fill className={classes["icon"]} />
              ) : item.type === "rail" ? (
                <FaTrain className={classes["icon"]} />
              ) : item.type === "air" ? (
                <IoAirplane className={classes["icon"]} />
              ) : item.type === "road" ? (
                <FaTruck className={classes["icon"]} />
              ) : (
                ""
              )}
              <p className={classes["load"]}>{item.name}</p>
            </div>
            <p className={classes["translations"]}>{getLangs(item)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
