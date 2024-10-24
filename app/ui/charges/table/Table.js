"use client";
import React from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";

const Table = ({ data, rows, search }) => {
  const usableData = data?.data?.data;
  const router = useRouter();
  const [tableData, setTableData] = useState(usableData ? usableData : []);
  const handleItemClick = (id) => {
    router.push(`/charges/${id}`);
  };

  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        <p className={classes["location"]}>Location</p>
        <p className={classes["kind"]}>Kind</p>
        <p className={classes["code"]}>Code</p>
        <p className={classes["region"]}>Region</p>
        <p className={classes["country"]}>Country</p>
        <p className={classes["alias"]}>Alias</p>
        <p className={classes["surcharges"]}>Surcharges</p>
        <p className={classes["translations"]}>Translations</p>
      </div>
      <div className={classes["body"]}>
        {tableData.map((item, index) => (
          <div key={index} className={classes["row"]}>
            <p className={classes["location"]}>{item.location}</p>
            <p className={classes["kind"]}>{item.kind}</p>
            <p className={classes["code"]}>{item.code}</p>
            <p className={classes["region"]}>{item.region}</p>
            <p className={classes["country"]}>{item.country}</p>
            {/* // not sure */}
            <p className={classes["alias"]}>{item.alias}</p>
            <p className={classes["surcharges"]}>{item.surcharges}</p>
            <p className={classes["translations"]}>{item.translations}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
